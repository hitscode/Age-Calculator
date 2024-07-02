import { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        placeholder="Enter birth date"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {birthDate && (
        <div className="result">
          <p>Your age is:</p>
          <p>
            {age.years} years, {age.months} months, and {age.days} days
          </p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
