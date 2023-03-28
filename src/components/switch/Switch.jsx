import { useState } from 'react';

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={isChecked ? 'switch switch-checked' : 'switch'}>
      <input
        type="checkbox"
        className="switch-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="switch-checkbox-icon"></div>
    </div>
  );
};

export default Switch;
