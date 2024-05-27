import { useState } from "react";
import LoginForm from "../../../components/Login/LoginFrom";
import Modal from "../../../components/Modal/Modal";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleFindIdClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h3>로그인</h3>
      <LoginForm />
      <button type="button" onClick={handleFindIdClick} aria-haspopup="true">
        아이디 찾기
      </button>
      {isModalOpen && <Modal id="findid" title="아이디 찾기">
        <input type="text" /> 
        <div>
          <button type="button">확인</button>
          <button type="button" onClick={handleCloseModal}>닫기</button>
        </div>
        </Modal>}
    </div>
  );
}
export default Login;
