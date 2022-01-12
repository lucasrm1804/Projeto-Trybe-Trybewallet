import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputBar extends Component {
  render() {
    const { label, type, testId } = this.props;
    return (
      <label className="flex" htmlFor={ label }>
        <span className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {label}
        </span>
        <input
          data-testid={ testId }
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none focus:shadow-outline"
          type={ type }
          id={ label }
        />
      </label>
    );
  }
}

InputBar.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  testId: PropTypes.string.isRequired,
};

export default InputBar;
