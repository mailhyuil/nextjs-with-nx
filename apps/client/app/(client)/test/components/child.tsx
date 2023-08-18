import { useRef } from 'react';

export default function Child(props: {
  name: string;
  age: number;
  setAge: any;
}) {
  const ballRef = useRef<HTMLDivElement>(null);
  let x = 0;
  let theta = 0;
  const draw = () => {
    const ball = ballRef.current;
    if (ball) {
      console.log('animating!');
      ball.style.left = `${x}px`;
      ball.style.top = `${Math.sin(theta) * 100 + 100}px`;
      theta += 0.1;
      x += 5;
    }
    const requestId = requestAnimationFrame(draw);
    if (x > window.innerWidth) {
      console.log('cancelled!');
      cancelAnimationFrame(requestId);
    }
  };
  draw();

  const onClick = () => {
    props.setAge(props.age + 1);
  };

  return (
    <div>
      <div>Child : {props.name}</div>
      <div>Child : {props.age}</div>
      <button onClick={onClick}>increase age in child</button>
      <div className="bg-red-50 w-full h-96 relative overflow-hidden">
        <div
          ref={ballRef}
          className="w-10 aspect-square rounded-full absolute left-0 right-0 bg-blue-500"
        ></div>
      </div>
    </div>
  );
}
