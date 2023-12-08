import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        padding: '1px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: 'none',
        outline: 'none',
        background: isToggled ? 'limegreen' : 'white', // Background color based on toggled state
        borderRadius: '30px',
        transition: 'background-color 0.3s ease', // Adding transition for a smooth color change
      }}
    >
      <div
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '30px',
          backgroundColor: isToggled ? 'limegreen' : 'white', // Background color based on toggled state
          color: 'white',
          textAlign: 'center',
          transition: 'background-color 0.3s ease', // Adding transition for a smooth color change
        }}
      >
        Yes
      </div>
      <div
        style={{
          flex: 1,
          padding: '10px',
          borderRadius:'30px',
          backgroundColor: isToggled ? 'white' : 'limegreen', // Background color based on toggled state
          color: 'white',
          textAlign: 'center',
          transition: 'background-color 0.3s ease', // Adding transition for a smooth color change
        }}
      >
        No
      </div>
    </button>
  );
};

export default ToggleButton;
