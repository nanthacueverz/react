import React, { useState, useEffect } from 'react';

const center = {
  textAlign: 'Center'
};

const btnStyle = {
  paddingRight: '1px',
  paddingLeft: '1px'
};

const textStyle = {
  fontSize: '15px',
  padding: '20px',
  verticalAlign: 'Middle'
};

function Btn({ children, onClick }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

function Counter() {
  const [counter, updateCounter] = useState(0);
  const [randomText, updaterandomText] = useState('This is random Text');

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }
  useEffect(() => {
    console.log('component lifecycle');
    // updaterandomText(`Random text is updated`);
  }, [counter]);

  return (
    <div style={center} className=' bg-gold text-white font-semibold hover:text-white py-1 px-1 border border-white rounded w-24'>
      <Btn onClick={handleDecrement}>-</Btn>
      <span style={textStyle} className='text-[10px]'>{counter}</span>
      <Btn onClick={handleIncrement}>+</Btn>
    </div>
  );
}

export default Counter;
