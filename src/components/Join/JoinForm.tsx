import { SubmitHandler, useForm } from "react-hook-form"

interface FormValue {
    id: string
    password: string
    password_confirm: string
    name: string
    email: string
    question: string
    answer: string
}

function JoinForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<FormValue>();

    const handleJoin : SubmitHandler<FormValue> = (data) => {
        console.log(data);
    }

    return <form onSubmit={handleSubmit(handleJoin)}>
        <div>
            <label htmlFor="">아이디</label>
            <input type="text" {...register("id")} />
            <button type="button">중복확인</button>
        </div>
        <div>
            <label htmlFor="">비밀번호</label>
            <input type="password" {...register("password")} />
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
                <option value="" {...register("question")}></option>
            </select>
        </div>
        <div>
            <label htmlFor="">아이디 찾기 답변</label>
            <input type="text" {...register("answer")} />
        </div>
        <button>회원가입</button>
    </form>
}

export default JoinForm;