import { SubmitHandler, useForm, } from "react-hook-form";

import type { FormValue, QuestionList } from "../../types/join";

// type InputProps = {
//   id: Path<FormValue>
//   label: string
//   placeholder: string
//   type: string
//   minLength: number
//   maxLength: number
//   patternValue: RegExp
//   patternMsg: string
//   required: string
//   register: UseFormRegister<FormValue>
// }

function JoinForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">아이디</label>
        <input
          id="id"
          data-id="아이디"
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
          aria-invalid={errors.id ? "true" : "false"}
        />
        {errors.id && <span>{errors.id.message}</span>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          placeholder="비밀번호를 필수입력입니다. (8~20자 영문, 숫자, 특수문자 조합)"
          type="password"
          {...register("password", {
            required: "비밀번호를 필수입력입니다.",
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/,
              message: "8~20자 영문, 숫자, 특수문자 조합",
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: "비밀번호를 한번 더 입력해주세요.",
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/,
              message: "비밀번호를 한번 더 확인해주세요.",
            },
          })}
          aria-invalid={errors.passwordConfirm ? "true" : "false"}
        />
        {errors.passwordConfirm && (
          <span>{errors.passwordConfirm.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "이름은 필수입력입니다.",
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          {...register("email", {
            required: "이메일은 필수입력입니다.",
            pattern: {
              value: /^[A-Za-z0-9+-_.]+@[a-z]+\.[a-z]+$/,
              message: "이메일을 확인해주세요.",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="question">아이디 찾기 질문</label>
        <select id="questionList" {...register("question")}>
          <option value={QuestionList.option1}>{QuestionList.option1}</option>
          <option value={QuestionList.option2}>{QuestionList.option2}</option>
          <option value={QuestionList.option3}>{QuestionList.option3}</option>
        </select>
        {errors.question && <span>{errors.question.message}</span>}
      </div>
      <div>
        <label htmlFor="answer">아이디 찾기 답변</label>
        <input
          id="answer"
          type="text"
          {...register("answer", {
            required: "아이디 찾기 답변은 필수입력입니다.",
          })}
          aria-invalid={errors.answer ? "true" : "false"}
        />
        {errors.answer && <span>{errors.answer.message}</span>}
      </div>
      <button>회원가입</button>
    </form>
  );
}
export default JoinForm;

