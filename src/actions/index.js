// Coloque aqui suas actions
import apiRequest from '../services/api';

const ADD_USER = 'ADD_USER';
const PRICE_SUCCESS = 'PRICE_SUCCESS';
const PRICE_FAIL = 'PRICE_FAIL';
const GET_PRICE = 'GET_PRICE';
const ADD_EXPENSES = 'ADD_EXPENSES';

export const addUser = (payload) => ({ type: ADD_USER, payload });

export const getPrice = () => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return apiRequest()
    .then((payload) => dispatch({ type: PRICE_SUCCESS, payload }))
    .catch((error) => dispatch({ type: PRICE_FAIL, payload: error }));
};

export const addExpenses = (payload) => ({ type: ADD_EXPENSES, payload });
