import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(90);
  console.log('App');

  useEffect(() => {
    console.log('effect start');
    if (age === 95) {
      setCount(101);
    }
  }, [age]);
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>aaa{count}</div>
      <div onClick={() => setAge(age + 1)}>bbb{age}</div>
    </div>
  );
}
