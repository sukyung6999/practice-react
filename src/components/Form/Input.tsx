import React, {InputHTMLAttributes, DetailedHTMLProps} from "react";

type InputValue = {
  label: string
}

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props & InputValue>((props, ref) => {
  return <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input ref={ref} {...props}/>
  </div>;
});
export default Input;
