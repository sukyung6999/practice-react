import { useRef, useState } from "react";
import LoginForm from "../../../components/Login/LoginFrom";
import CreatePortalModal from "../../../components/Modal/createPortalModal";

function Login() {
  const modalRef = useRef<HTMLDialogElement>(null)
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    // setIsModalOpen(false);
    modalRef.current?.close();
  }

  const handleFindIdClick = () => {
    // setIsModalOpen(true);
    modalRef.current?.showModal();
  };

  return (
    <>
      <div>
        <h3>로그인</h3>
        <LoginForm />
        <button type="button" onClick={handleFindIdClick} aria-haspopup="true">
          아이디 찾기
        </button>
      </div>
      {/* {isModalOpen && <CreatePortalModal id="findid" title="아이디 찾기">
        <input type="text" /> 
        <div>
          <button type="button">확인</button>
          <button type="button" onClick={handleCloseModal}>닫기</button>
        </div>
        </CreatePortalModal>} */}
      <dialog ref={modalRef}>
        <input type="text" /> 
        <div>
          <button type="button">확인</button>
          <button type="button" onClick={handleCloseModal}>닫기</button>
        </div>
      </dialog>
    </>
  );
}
export default Login;
