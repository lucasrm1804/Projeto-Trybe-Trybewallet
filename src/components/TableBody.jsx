import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const {
      wallet: { expenses },
    } = this.props;
    return (
      <tbody>
        {expenses.map(
          (
            { value, description, currency, method, tag, exchangeRates },
            index,
          ) => (
            <tr key={ index }>
              <td className="px-4 py-2">{description}</td>
              <td className="px-4 py-2">{tag}</td>
              <td className="px-4 py-2">{method}</td>
              <td className="px-4 py-2">{value}</td>
              <td className="px-4 py-2">
                {exchangeRates[currency].name}
              </td>
              <td className="px-4 py-2">
                {Number(exchangeRates[currency].ask).toFixed(2)}
              </td>
              <td className="px-4 py-2">
                {value * exchangeRates[currency].ask}
              </td>
              <td className="px-4 py-2">Real</td>
            </tr>
          ),
        )}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => state;

TableBody.propTypes = {
  wallet: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ],
  ).isRequired,
};

export default connect(mapStateToProps)(TableBody);
