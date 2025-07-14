import { useState } from 'react';

const Day5 = () => {
  const [Toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div>
      <label>
        <input type='checkbox' checked={Toggle} onChange={handleToggle} />
      </label>
      <p>{Toggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Day5;
