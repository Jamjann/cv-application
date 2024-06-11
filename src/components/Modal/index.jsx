import { useEffect, useRef } from "react";
import "../../styles/components/modal.css";

function Modal({ isOpen, onClose, title, children }) {
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
      <div className="header">
        <h3>{title}</h3>
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
      <div className="content">{isOpen && children}</div>
    </dialog>
  );
}

export default Modal;
