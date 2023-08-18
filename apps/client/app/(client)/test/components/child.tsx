export default function Child(props: {
  name: string;
  age: number;
  setAge: any;
}) {
  const onClick = () => {
    props.setAge(props.age + 1);
  };
  return (
    <div>
      <div>Child : {props.name}</div>
      <div>Child : {props.age}</div>
      <button onClick={onClick}>increase age in child</button>
    </div>
  );
}
