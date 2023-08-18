'use client';
import ReactDOM from 'react-dom';

const Portal = ({
  children,
  selector,
}: {
  children: JSX.Element;
  selector: string;
}) => {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
