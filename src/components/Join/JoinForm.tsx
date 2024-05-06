import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValue {
  userId: string;
  password: string;
  password_confirm: string;
  name: string;
  email: string;
  question: string;
  answer: string;
}

function JoinForm() {
  const idList: string[] = ["sukyung", "susu"];

  const [isUserIdChecked, setIsUserIdChecked] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<FormValue>();

  const handleJoin: SubmitHandler<FormValue> = (data) => {
    if (!isUserIdChecked) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }
  };

  const handleDuplicateCheck = () => {
    const id = getValues("userId");

    if (!id) {
      alert("아이디를 입력해주세요");
      return;
    }

    if (!idList.includes(id)) {
      alert("사용 가능한 아이디입니다.");
      setIsUserIdChecked(true);
      return;
    } else {
      alert("사용할 수 없는 아이디입니다.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(handleJoin)}>
      <div>
        <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          type="text"
          placeholder="아이디(2~13자 영문, 숫자 입력)"
          {...register("userId",{
            required: true,
            minLength: 2,
            maxLength: 13,
            pattern: /[a-zA-Z0-9]{2,13}/
          })}
        />
        {errors.userId && <p>아이디를 확인해주세요. (2~13자 영문, 숫자 입력)</p>}
        <button type="button" onClick={handleDuplicateCheck}>
          중복확인
        </button>
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password"
        id="password"
          placeholder="비밀번호(8~20자 영문, 숫자, 특수문자)"
          {...register("password",{
            required: true,
            minLength: 9,
            maxLength: 20,
            pattern: /[a-zA-Z0-9\W_]{9,20}/
          })} />
          {errors.password && <p>비밀번호를 확인해주세요. (8~20자 영문, 숫자, 특수문자)</p>}
      </div>
      <div>
        <label htmlFor="">비밀번호 확인</label>
        <input type="password" {...register("password_confirm")} />
      </div>
      <div>
        <label htmlFor="">이름</label>
        <input type="text" {...register("name")} />
      </div>
      <div>
        <label htmlFor="">이메일</label>
        <input type="text" {...register("email")} />
      </div>
      <div>
        <label htmlFor="">아이디 찾기 질문</label>
        <select name="" id="">
          <option value="" {...register("question")}>
            질문을 선택해주세요.
          </option>
          <option value="" {...register("question")}>
            내가 가장 좋아하는 영화는?
          </option>
          <option value="" {...register("question")}>
            내가 가장 좋아하는 음식은?
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="">아이디 찾기 답변</label>
        <input type="text" {...register("answer")} />
      </div>
      <button>회원가입</button>
    </form>
  );
}

export default JoinForm;
