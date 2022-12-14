// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const PRICE_SUCCESS = 'PRICE_SUCCESS';
const PRICE_FAIL = 'PRICE_FAIL';
const GET_PRICE = 'GET_PRICE';
const ADD_EXPENSES = 'ADD_EXPENSES';

const INIT = { expenses: [], currencies: {} };

const wallet = (state = INIT, { payload, type }) => {
  switch (type) {
  case GET_PRICE:
    return { ...state };
  case PRICE_SUCCESS:
    return { ...state, currencies: payload };
  case ADD_EXPENSES:
    return { ...state,
      expenses: [
        ...state.expenses, {
          id: state.expenses.length,
          ...payload,
        },
      ] };
  case PRICE_FAIL:
    return { ...state };
  default:
    return state;
  }
};

export default wallet;
