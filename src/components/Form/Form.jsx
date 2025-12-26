import { useState } from "react";
import "./Form.css";

const Form = ({ onDataChange }) => {

  const [formData, setFormData] = useState({
    currentSavings: 10000,
    yearlySavings: 1000,
    expectedInterest: 10,
    duration: 10,
  });

  const handleChange = (field, value) => {
    const updatedData = {
      ...formData,
      [field]: value,
    };
    setFormData(updatedData);

  };

  const handleCount =()=>{
    onDataChange(formData);
    console.log(formData);
  }

  return (
    <div className="card">
      <div className="input">
        <p>CURRENT SAVINGS</p>
        <input
          type="number"
          value={formData.currentSavings}
          onChange={(e) => handleChange("currentSavings", +e.target.value)}
        />
      </div>
      <div className="input">
        <p>YEARLY SAVINGS</p>
        <input
          type="number"
          value={formData.yearlySavings}
          onChange={(e) => handleChange("yearlySavings", +e.target.value)}
        />
      </div>
      <div className="input">
        <p>EXPECTED INTEREST (% PER YEAR)</p>
        <input
          type="number"
          value={formData.expectedInterest}
          onChange={(e) => handleChange("expectedInterest", +e.target.value)}
        />
      </div>
      <div className="input">
        <p>INVESTMENT DURARTION (YEARS)</p>
        <input
          type="number"
          value={formData.duration}
          onChange={(e) => handleChange("duration", +e.target.value)}
        />
      </div>
      <div className="buttons">
      <button className="RESET">RESET</button>
      <button className="CALCULATE" onClick={(e)=> handleCount()}>CALCULATE</button>
      </div>
    </div>
  );
};

export default Form;
