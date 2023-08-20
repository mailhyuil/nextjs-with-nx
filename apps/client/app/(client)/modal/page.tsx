'use client';
import { useState } from 'react';
import Modal from '../components/modal';
export default function ModalPage() {
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <button
        className="border rounded-xl  bg-gray-50 px-2 py-1"
        type="button"
        onClick={open}
      >
        open
      </button>

      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <div className="flex flex-col gap-2 w-96 items-center">
          <div>
            <h1 className="font-bold">MODAL</h1>
          </div>
          <p>안녕하세요</p>
          <button
            className="border rounded-xl  bg-gray-50 px-2 py-1"
            type="button"
            onClick={close}
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
}
