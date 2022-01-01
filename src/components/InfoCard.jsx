import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '10000/- ' : '5000/- '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Next Monday ' : 'Last Thursday '}
    </div>
  );
};

export default InfoCard;