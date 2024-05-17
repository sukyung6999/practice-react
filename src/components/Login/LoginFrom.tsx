import { useForm } from "react-hook-form";
import Input from "../Form/Input";

function LoginForm() {
  const {register, formState: {errors}} = useForm();
  return <form action="">
    <Input
      id="loginId"
      label="아이디"
      placeholder="아이디를 필수입력입니다. (4~12자 영문, 숫자 입력)"
      type="text"
      {...register("id", {
        required: "아이디를 필수입력입니다.",
        minLength: 4,
        maxLength: 12,
        pattern: {
          value: /[A-Za-z0-9]/,
          message: "4~12자 영문, 숫자 입력",
        },
      })}
    />
    <button>로그인</button>
  </form>
}
export default LoginForm;