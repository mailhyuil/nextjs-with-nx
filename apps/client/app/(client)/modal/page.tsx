'use client';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
export default function ModalPage() {
  const [openModal, setOpenModal] = useState(false);
  const nodeRef = useRef(null);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  const classNames = {
    appear: 'opacity-0',
    appearActive: 'transition-opacity duration-300 opacity-100',
    enter: 'opacity-0',
    enterActive: 'transition-opacity duration-300 opacity-100',
    // exit: "opacity-100",  // this breaks the exit transition
    exitActive: 'transition-opacity duration-200 opacity-0',
  };
  return (
    <div>
      <CSSTransition
        nodeRef={nodeRef}
        in={openModal}
        timeout={1000}
        classNames={classNames}
      >
        <div ref={nodeRef}>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setOpenModal((value) => !value)}>
        Click to Enter
      </button>
    </div>
  );
}
