import React, { useState } from 'react';
import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";
import LabeledCheck from './LabelCheck';


function App() {
  const allNames = [
    "krists",
    "tina",
    "adrians"
  ];
  const helloJSX = allNames.map((name, index) => {
    return <Hello key={index} name={name} />;
  });

  const allRatios = [7, 43, 101];
  const counterJSX = allRatios.map((ratio, index) => (
    <Counter key={index} value={ratio} />
  ));

  const allChecks = [true, true, false];
  const checkJSX = allChecks.map((value, index) => (
    <Check key={index} value={value} />
  ));

  const initialChecks = [
    { label: 'Agree to the Policy', check: true },
    { label: 'Receive Offers', check: false },
  ];

  const [checks, setChecks] = useState(initialChecks);

  const handleCheckChange = (label, value) => {
    const updatedChecks = checks.map((item) =>
      item.label === label ? { ...item, check: value } : item
    );
    setChecks(updatedChecks);
  };

  const renderLabeledChecks = () => {
    return checks.map((check, index) => (
      <LabeledCheck
        key={index}
        label={check.label}
        check={check.check}
        onCheckChange={handleCheckChange}
      />
    ));
  };

  return (
    <>
      {counterJSX}
      {helloJSX}
      {checkJSX}
      {renderLabeledChecks()}
    </>
  );
}

export default App;

