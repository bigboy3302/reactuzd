import React, { useState } from 'react';

function Check({ initialCheck }) {
  const [isChecked, setIsChecked] = useState(initialCheck);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
        {isChecked ? 'True' : 'False'}
      </label>
    </div>
  );
}

export default Check;
