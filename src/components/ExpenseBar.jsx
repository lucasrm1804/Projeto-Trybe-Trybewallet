import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputBar from './InputBar';
import SelectInput from './SelectInput';
import ButtonExpense from './ButtonExpense';
import apiRequest from '../services/api';
import * as ACT from '../actions';

class ExpenseBar extends Component {
  constructor(props) {
    super(props);
    this.food = 'Alimentação';
    this.state = {
      moedas: [],
      expenses: {
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: this.food,
      },
    };
    this.tratamentoApi = this.tratamentoApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.tratamentoApi();
  }

  tratamentoApi() {
    apiRequest().then((data) => {
      delete data.USDT;
      this.setState({ moedas: Object.keys(data) });
    });
  }

  handleChange({ target: { value, id } }) {
    this.setState((prev) => ({
      expenses: { ...prev.expenses, [id]: value },
    }));
  }

  handleClick() {
    const { addExpenses } = this.props;
    const {
      expenses: { currency, tag, method, description, value },
    } = this.state;
    apiRequest()
      .then((data) => {
        addExpenses({
          currency,
          tag,
          method,
          description,
          value,
          exchangeRates: data,
        });
      })
      .then(() => {
        this.setState(() => ({
          expenses: {
            value: '0',
            description: '',
            currency: 'USD',
            method: 'Dinheiro',
            tag: this.food,
          },
        }));
      });
  }

  render() {
    const {
      moedas,
      expenses: { currency, tag, method, description, value },
    } = this.state;
    return (
      <div
        className="w-full h-full flex mt-2 border-2 border-blue-800 items-center
        justify-evely "
      >
        <InputBar
          label="valor"
          type="number"
          testId="value-input"
          id="value"
          value={ value }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="moeda"
          valuesArray={ moedas }
          testId="currency-input"
          id="currency"
          value={ currency }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="método"
          valuesArray={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          testId="method-input"
          id="method"
          value={ method }
          handleChange={ this.handleChange }
        />
        <SelectInput
          label="tag"
          valuesArray={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          testId="tag-input"
          id="tag"
          value={ tag }
          handleChange={ this.handleChange }
        />
        <InputBar
          label="descrição"
          type="text"
          testId="description-input"
          id="description"
          value={ description }
          handleChange={ this.handleChange }
        />
        <ButtonExpense
          text="Adicionar Despesa"
          handleClick={ this.handleClick }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(ACT.getPrice()),
  addExpenses: (payload) => dispatch(ACT.addExpenses(payload)),
});

ExpenseBar.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseBar);
