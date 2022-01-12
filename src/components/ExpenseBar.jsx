import React, { Component } from 'react';
import InputBar from './InputBar';
import SelectInput from './SelectInput';
import ButtonExpense from './ButtonExpense';
import apiRequest from '../services/api';

class ExpenseBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // expenses: [],
      moedas: [],
    };
    this.tratamentoApi = this.tratamentoApi.bind(this);
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

  render() {
    const { moedas } = this.state;
    return (
      <div
        className="w-full h-full flex mt-2 border-2 border-blue-800 items-center
        justify-evely "
      >
        <InputBar label="valor" type="number" testId="value-input" />
        <SelectInput label="moeda" valuesArray={ moedas } testId="currency-input" />
        <SelectInput
          label="método"
          valuesArray={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          testId="method-input"
        />
        <SelectInput
          label="tag"
          valuesArray={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          testId="tag-input"
        />
        <InputBar label="descrição" type="text" testId="description-input" />
        <ButtonExpense
          text="Adicionar Despesa"
        />
      </div>
    );
  }
}

export default ExpenseBar;
