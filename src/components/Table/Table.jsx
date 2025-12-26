import React from 'react';
import './Table.css';

const Table = ({ data, initialInvestment }) => {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <p className="no-data">No Data available.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((year, index) => (
            <tr key={index}>
              <td>{year.year}</td>
              <td>${year.totalSavings.toFixed(2)}</td>
              <td>${year.yearlyInterest.toFixed(2)}</td>
              <td>${year.totalInterest.toFixed(2)}</td>
              <td>${year.investedCapital.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;