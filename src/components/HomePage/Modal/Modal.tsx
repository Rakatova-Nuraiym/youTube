import { FC, ReactNode } from "react";
import scss from "./modal.module.scss";

interface modal {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}
const Modal: FC<modal> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={scss.modal}>
      <div className={scss.MainModal}>
        <div>
          {children}
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
