import React, { useState } from 'react';

function LabeledCheck({ label, check, onCheckChange }) {
  const [isChecked, setIsChecked] = useState(check);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    onCheckChange(label, !isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
        {label}
      </label>
    </div>
  );
}

export default LabeledCheck;