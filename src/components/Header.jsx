import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.calc = () => {
      const { wallet: { expenses } } = this.props;
      return expenses.reduce((acc, curr) => {
        acc += curr.value * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
    };
  }

  render() {
    const { user } = this.props;
    return (
      <nav
        className="flex items-center justify-between flex-wrap
        bg-teal-500 p-6 bg-blue-500"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">

          <span className="font-semibold text-xl tracking-tight">
            TrybeWallet
          </span>
        </div>
        <div>
          <span
            data-testid="email-field"
            className="font-semibold text-xl tracking-tight mr-6"
          >
            {user.email}
          </span>
          <span
            data-testid="total-field"
            className="font-semibold text-xl tracking-tight mr-6"
          >
            { `Despesa Total ${this.calc()}` }
          </span>
          <span
            data-testid="header-currency-field"
            className="font-semibold text-xl tracking-tight mr-6"
          >
            BRL
          </span>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  wallet: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);
