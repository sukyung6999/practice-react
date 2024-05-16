import React, {InputHTMLAttributes, DetailedHTMLProps} from "react";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <div>
    <input ref={ref} {...props}/>
  </div>;
});
export default Input;
