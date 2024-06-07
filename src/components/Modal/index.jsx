import { useEffect, useRef } from "react";
import "../../styles/components/modal.css";

function Modal({ isOpen, onClose, children }) {
  const ref = useRef();

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref}>
      {/* <button className="close-btn" onClick={onClose}>
        x
      </button> */}
      {children}
    </dialog>
  );
}

export default Modal;
