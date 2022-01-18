import React from 'react';
import Header from '../components/Header';
import ExpenseBar from '../components/ExpenseBar';
import TableWallet from '../components/TableWallet';
import TableBody from '../components/TableBody';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseBar />
        <TableWallet />
        <TableBody />
      </div>
    );
  }
}

export default Wallet;
