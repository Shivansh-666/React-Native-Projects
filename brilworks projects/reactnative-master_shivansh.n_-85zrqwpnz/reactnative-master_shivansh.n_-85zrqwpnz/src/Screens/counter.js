import {useState, useEffect} from 'react';

const useCounter = (initialValue, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return [count, increment, decrement];
};

export default useCounter;
