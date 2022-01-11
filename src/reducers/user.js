// Esse reducer será responsável por tratar as informações da pessoa usuária
const INIT = { email: '' };
const ADD_USER = 'ADD_USER';

const addUser = (state = INIT, { payload, type }) => {
  switch (type) {
  case ADD_USER:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default addUser;
