export default function Modal(props: { children: JSX.Element }) {
  return (
    <div className="fixed bg-black/10 w-screen h-screen flex justify-center items-center">
      <div className="bg-white">{props.children}</div>
    </div>
  );
}
