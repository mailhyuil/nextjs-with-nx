import { AnimatePresence, motion } from 'framer-motion';
import Portal from './portal';

export default function Modal(props: {
  openModal: boolean;
  children: JSX.Element;
}) {
  return (
    <AnimatePresence>
      {props.openModal && (
        <Portal selector="#modal-portal">
          <motion.div
            className="fixed bg-black/10 w-screen h-screen flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
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
