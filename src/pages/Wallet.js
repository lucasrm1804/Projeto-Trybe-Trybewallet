import React from 'react';
import Header from '../components/Header';
import ExpenseBar from '../components/ExpenseBar';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseBar />
        <TableWallet />
      </div>
    );
  }
}

export default Wallet;
