'use client';
import { useState } from 'react';
import Modal from '../components/modal';
import Portal from '../components/portal';

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
        onClick={open}
        className="bg-gray-50 border-gray-100 px-2 py-1 rounded-md cursor-pointer"
      >
        open
      </button>
      {openModal && (
        <Portal selector="modal-portal">
          <Modal>
            <div>
              <h1>Modal</h1>
              <button
                onClick={close}
                className="bg-gray-50 border-gray-100 px-2 py-1 rounded-md cursor-pointer"
              >
                close
              </button>
            </div>
          </Modal>
        </Portal>
      )}
    </div>
  );
}
