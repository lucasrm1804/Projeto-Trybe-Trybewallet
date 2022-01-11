import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import LoginButton from '../components/ButtonLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkinput = this.checkinput.bind(this);
  }

  handleChange({ target }) {
    const { value, id } = target;
    this.setState({ [id]: value }, () => this.checkinput());
  }

  checkinput() {
    const { email, password } = this.state;
    const validation = /\S+@\S+\.\S+/;
    const SIX = 6;
    if (validation.test(email) && SIX <= password.length) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const { isDisabled, email, password } = this.state;
    const { history } = this.props;
    return (
      <div
        className="flex w-full h-screen border bg-blue-100 flex-col items-center
       justify-center"
      >
        <div
          className="w-96 h-60 flex flex-col items-center border border-black bg-blue-50
        justify-evenly"
        >
          <span
            className="text-3xl font-bold text-grey-700"
          >
            Login
          </span>
          <LoginInput
            type="email"
            placeholder="exemplo@email.com"
            testId="email-input"
            id="email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <LoginInput
            type="password"
            placeholder="senha"
            testId="password-input"
            id="password"
            value={ password }
            handleChange={ this.handleChange }
          />
          <LoginButton
            email={ email }
            isDisabled={ isDisabled }
            history={ history }
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
