import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterInput extends Component {
  render() {
    const { label, valuesArray, testId } = this.props;
    return (
      <label className="inline-block relative w-64 flex" htmlFor={ label }>
        <span className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {label}
        </span>
        <select
          data-testid={ testId }
          className="block appearance-none w-full bg-white border border-gray-400
          houver:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight
          focus:outline-nome focus:shadow-outline"
          id={ label }
        >
          {valuesArray.map((value, index) => (
            <option key={ index }>{value}</option>
          ))}
        </select>
      </label>
    );
  }
}

FilterInput.propTypes = {
  label: PropTypes.string.isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  testId: PropTypes.string.isRequired,
};

export default FilterInput;
