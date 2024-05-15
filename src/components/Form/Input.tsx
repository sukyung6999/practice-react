import { InputProps } from "../Join/JoinForm";

function Input({id, label, placeholder, type, minLength, maxLength, patternValue, patternMsg, required, register, errors}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id, {
          required,
          minLength,
          maxLength,
          pattern: {
            value: patternValue,
            message: patternMsg,
          },
        })}
        aria-invalid={errors[id] ? "true" : "false"}
      />
      {errors.id && <span>{errors.id.message}</span>}
    </div>
  );
}
export default Input;
