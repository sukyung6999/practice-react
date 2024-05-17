import React, {SelectHTMLAttributes, DetailedHTMLProps} from "react";
import { QuestionList } from "../../types/join";

type SelectValue = {
  label: string
}

type Props = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, Props & SelectValue>((props, ref) => {
  return <div>
    <label htmlFor="question">아이디 찾기 질문</label>
    <select ref={ref} {...props}>
      <option value={QuestionList.option1}>{QuestionList.option1}</option>
      <option value={QuestionList.option2}>{QuestionList.option2}</option>
      <option value={QuestionList.option3}>{QuestionList.option3}</option>
    </select>
</div>
});
export default Select;
