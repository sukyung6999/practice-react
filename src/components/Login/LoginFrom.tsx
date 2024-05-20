import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Form/Input";
import { LoginInputs } from "../../types/input";

function LoginForm() {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = () => {};
  return <form onSubmit={handleSubmit(onSubmit)}>
    <Input
      id="loginId"
      label="아이디"
      placeholder="아이디는 필수입력입니다. (4~12자 영문, 숫자 입력)"
      type="text"
      {...register("loginId", {
        required: "아이디를 필수입력입니다.",
        minLength: 4,
        maxLength: 12,
        pattern: {
          value: /[A-Za-z0-9]/,
          message: "4~12자 영문, 숫자 입력",
        },
      })}
    />
    {errors.loginId && <span>{errors.loginId.message}</span>}
    <Input
      id="loginPassword"
      label="비밀번호"
      placeholder="비밀번호는 필수입력입니다. (4~12자 영문, 숫자 입력)"
      type="text"
      {...register("loginPassword", {
        required: "비밀번호는 필수입력입니다. (4~12자 영문, 숫자 입력)",
        minLength: 4,
        maxLength: 12,
        pattern: {
          value: /[A-Za-z0-9]/,
          message: "4~12자 영문, 숫자 입력",
        },
      })}
    />
    {errors.loginPassword && <span>{errors.loginPassword.message}</span>}
    <button>로그인</button>
  </form>
}
export default LoginForm;