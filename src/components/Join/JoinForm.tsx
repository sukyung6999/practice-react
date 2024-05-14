import { SubmitHandler, useForm } from "react-hook-form";

enum QuestionList {
  option1 = "내가 가장 좋아하는 영화는?",
  option2 = "내가 가장 좋아하는 장소는?",
  option3 = "내가 가장 좋아하는 색깔은?",
}
interface FormValue {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  question: QuestionList;
  answer: string;
}
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
          type="text"
          {...register("id", {
            required: true,
            minLength: 4,
            maxLength: 12,
            pattern: /[A-Za-z0-9]/
          })}
        />
        {errors.id && <span>아이디를 확인해주세요. (4~12자 영문 또는 숫자만 가능)</span>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/
            // 내 특수문자 : !@#$%^&*-=+
            // 정답 : !@#$%^&*()
          })}
        />
        {errors.password && <span>비밀번호를 확인해주세요. (8글자 이상, 영문, 숫자, 특수문자)</span>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: true,
            pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/
          })}
        />
        {errors.passwordConfirm && <span>비밀번호를 한번 더 확인해주세요.</span>}
      </div>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && <span>이름을 확인해주세요.</span>}
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <span>이메일을 확인해주세요.</span>}
      </div>
      <div>
        <label htmlFor="question">아이디 찾기 질문</label>
        <select
          id="questionList"
          {...register("question", {
            required: true,
          })}
        >
          <option value={QuestionList.option1}>{QuestionList.option1}</option>
          <option value={QuestionList.option2}>{QuestionList.option2}</option>
          <option value={QuestionList.option3}>{QuestionList.option3}</option>
        </select>
        {errors.question && <span>아이디 찾기 질문을 확인해주세요.</span>}
      </div>
      <div>
        <label htmlFor="answer">아이디 찾기 답변</label>
        <input
          id="answer"
          type="text"
          {...register("answer", {
            required: true,
          })}
        />
        {errors.answer && <span>아이디 찾기 답변을 확인해주세요.</span>}
      </div>
      <button>회원가입</button>
    </form>
  );
}
export default JoinForm;
