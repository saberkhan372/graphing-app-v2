import React, { useState } from 'react';

interface ParameterSliderProps {
  parameter: string;
}

const ParameterSlider: React.FC<ParameterSliderProps> = ({ parameter }) => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <label>
        {parameter}: {value}
      </label>
      <input
        type="range"
        min="-10"
        max="10"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export default ParameterSlider;
