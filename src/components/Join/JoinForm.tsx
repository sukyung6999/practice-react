import { SubmitHandler, useForm } from "react-hook-form";
import type { JoinInputs } from "../../types/input";
import Input from "../Form/Input";
import { useRef, useState } from "react";

function JoinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinInputs>();

  const onSubmit: SubmitHandler<JoinInputs> = () => {};

  const [previewImg, setPreviewImg] = useState      ('');
  const [fileImg, setFileImg] = useState<File | null>(null);
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);
  const {ref: profileRegisterRef, ...rest} = register('profile');

  const handleUploadButton = () => {    
    hiddenInputRef.current?.click();
  }

  const handleUploadProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0];
    
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImg(reader.result);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
        id="profile"
        label="프로필"
        type="file"
        style={{display: 'none'}}
        {...rest}
        ref={(e) => {
          profileRegisterRef(e);
          hiddenInputRef.current = e;
        }}
        onChange={handleUploadProfile}
        />
        <img src={previewImg} alt="프로필 이미지" />
        <button type="button" onClick={handleUploadButton}>업로드</button>
      </div>
      <Input
        id="joinId"
        label="아이디"
        placeholder="아이디는 필수입력입니다. (4~12자 영문, 숫자 입력)"
        type="text"
        {...register("joinId", {
          required: "아이디는 필수입력입니다.",
          minLength: 4,
          maxLength: 12,
          pattern: {
            value: /[A-Za-z0-9]/,
            message: "4~12자 영문, 숫자 입력",
          },
        })}
        aria-invalid={errors.joinId ? "true" : "false"}
      />
      {errors.joinId && <span>{errors.joinId.message}</span>}
      <button type="button">중복확인</button>

      <Input
        id="joinPassword"
        label="비밀번호"
        placeholder="비밀번호는 필수입력입니다. (8~20자 영문, 숫자, 특수문자 조합)"
        type="password"
        {...register("joinPassword", {
          required: "비밀번호는 필수입력입니다.",
          pattern: {
            value:
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/,
            message: "8~20자 영문, 숫자, 특수문자 조합",
          },
        })}
        aria-invalid={errors.joinPassword ? "true" : "false"}
      />
      {errors.joinPassword && <span>{errors.joinPassword.message}</span>}

      <Input
        id="joinPasswordConfirm"
        label="비밀번호 확인"
        type="password"
        {...register("joinPasswordConfirm", {
          required: "비밀번호는 한번 더 입력해주세요.",
          pattern: {
            value:
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-+])[a-zA-Z\d~!@#$%^&*-+]{8,20}$/,
            message: "비밀번호는 한번 더 확인해주세요.",
          },
        })}
        aria-invalid={errors.joinPasswordConfirm ? "true" : "false"}
      />
      {errors.joinPasswordConfirm && <span>{errors.joinPasswordConfirm.message}</span>}

      <Input
        id="name"
        label="이름"
        type="text"
        {...register("name", {
          required: "이름은 필수입력입니다.",
        })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <Input
        id="email"
        label="이메일"
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

      <button>회원가입</button>
    </form>
  );
}
export default JoinForm;
