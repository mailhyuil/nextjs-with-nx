import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Portal from './portal';

export default function Modal(props: {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsOpen: onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <AnimatePresence>
      {props.isOpen && (
        <Portal selector="#modal-portal">
          <motion.div
            className="fixed bg-black/10 w-screen h-screen flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={ref}
              className="bg-white rounded-xl p-5"
              initial={{ opacity: 0, translateY: '100%' }}
              animate={{ opacity: 1, translateY: '0%' }}
              exit={{ opacity: 0, translateY: '100%' }}
            >
              {props.children}
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
}
