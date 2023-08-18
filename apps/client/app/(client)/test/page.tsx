'use client';
import { useEffect, useRef, useState } from 'react';
import Child from './components/child';

export default function Test() {
  const [age, setAge] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current;
    if (div) {
      div.textContent = 'hyuil test';
      div.style.color = 'red';
      div.style.backgroundColor = 'yellow';
    }
  }, []);

  return (
    <div>
      <div ref={ref}>hello world</div>
      <Child name={'hyuil'} age={age} setAge={setAge}></Child>
    </div>
  );
}
