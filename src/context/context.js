import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 50000, category: 'Business', type: 'Income', date: '2021-12-6', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, { amount: 20025, category: 'Investments', type: 'Income', date: '2021-12-16', id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a' }, { amount: 40000, category: 'Salary', type: 'Income', date: '2021-12-13', id: '270304a8-b11d-4e16-9341-33df641ede64' }, { amount: 12000, category: 'Bills', type: 'Expense', date: '2021-12-26', id: '0f72e66e-e144-4a72-bbc1-c3c92018635e' }, { amount: 2500, category: 'Entertainment', type: 'Expense', date: '2021-12-25', id: 'c5647dde-d857-463d-8b4e-1c866cc5f83e' }, { amount: 25000, category: 'Travel', type: 'Expense', date: '2021-12-30', id: '365a4ebd-9892-4471-ad55-36077e4121a9' }, { amount: 5000, category: 'Car', type: 'Expense', date: '2020-11-23', id: '80cf7e33-fc3e-4f9f-a2aa-ecf140711460' }, { amount: 5000, category: 'Savings', type: 'Income', date: '2021-12-23', id: 'ef090181-21d1-4568-85c4-5646232085b2' }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);   

  return (
    <ExpenseTrackerContext.Provider value={{
      transactions,
      balance,
      deleteTransaction,
      addTransaction,
    }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};