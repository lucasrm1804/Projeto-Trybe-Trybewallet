import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class ButtonExpense extends Component {
  render() {
    const { text, testId, getPrice } = this.props;
    return (
      <button
        data-testid={ testId }
        type="button"
        onClick={ () => getPrice() }
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
         border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {text}
      </button>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(ACT.getPrice()),
});

ButtonExpense.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonExpense);
