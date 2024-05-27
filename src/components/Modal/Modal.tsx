import { createPortal } from "react-dom";
import style from "./Modal.module.css";

type props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

function Modal({ id, title, children }: props) {
  return (
    <>
      {createPortal(
        <div className={style.layer_modal}>
          <div className={style.wrap_modal}>
            <div
              role="dialog"
              aria-labelledby={`label_${id}`}
              aria-modal="true"
            >
              <h2 id={`label_${id}`}>{title}</h2>
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
export default Modal;
