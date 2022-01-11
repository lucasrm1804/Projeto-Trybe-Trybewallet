import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    const despesa = 0;
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
            {despesa}
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
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Header);
