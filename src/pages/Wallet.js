import React from 'react';
import Header from '../components/Header';
import ExpenseBar from '../components/ExpenseBar';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseBar />
      </div>
    );
  }
}

export default Wallet;
