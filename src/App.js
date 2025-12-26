import { useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table"
import invest from "./assets/investment-calculator-logo.png"

const App = () => {
  const [results, setResults] = useState([]);

  const handleFormData = (data) => {
    // 🔍 extraction des valeurs
    const {
      currentSavings,
      yearlySavings,
      expectedInterest,
      duration,
    } = data;

    let calculatedResults = [];
    let currentSaving = currentSavings;

    for (let year = 1; year <= duration; year++) {
      const yearlyInterest =
        currentSaving * (expectedInterest / 100);

      const savingEndOfYear =
        currentSaving + yearlyInterest + yearlySavings;

      const investedCapital =
        currentSavings + yearlySavings * year;

      const totalInterest =
        savingEndOfYear - investedCapital;

      calculatedResults.push({
        year,
        totalSavings: savingEndOfYear,
        interestYear: yearlyInterest,
        totalInterest,
        investedCapital,
      });

      currentSaving = savingEndOfYear;
    }

    setResults(calculatedResults);
  };
console.log(results);
  return (
    <div>
      <header>
      <img  className="img" src={invest} alt="img"/>
      <h2>Investment calculator </h2>
      </header>
      <Form onDataChange={handleFormData} />
      <Table data={results} initialInvestment={results[0]} />
      
    </div>
  );
};

export default App;
