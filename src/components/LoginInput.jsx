import React from 'react';
import PropTypes from 'prop-types';

class LoginInput extends React.Component {
  render() {
    const { testId, type, placeholder, id, value, handleChange } = this.props;
    return (
      <div className="flex items-center border-b border-red-500 py-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
          leading-tight focus:outline-none focus:shadow-outline"
          data-testid={ testId }
          placeholder={ placeholder }
          id={ id }
          value={ value }
          onChange={ (event) => handleChange(event) }
          type={ type }
        />
      </div>
    );
  }
}

LoginInput.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginInput;
