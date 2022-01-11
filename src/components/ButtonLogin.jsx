import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACT from '../actions';

class ButtonLogin extends React.Component {
  render() {
    const { addUser, email, isDisabled, history } = this.props;
    return (
      <button
      disabled={ isDisabled }
        className={
          isDisabled
            ? `bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
          border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-not-allowed
          opacity-50`
            : `bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4
          border-b-4 border-blue-700 hover:border-blue-500 rounded`
        }
        type="button"
        onClick={ () => {
          addUser(email);
          history.push('/carteira');
        } }
      >
        Entrar
      </button>
    );
  }
}

ButtonLogin.propTypes = {
  addUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addUser: (userInfo) => dispatch(ACT.addUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogin);
