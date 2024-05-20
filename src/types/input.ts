interface JoinInputs {
  joinId: string;
  joinPassword: string;
  joinPasswordConfirm: string;
  name: string;
  email: string;
  domain: string;
  question: QuestionList;
  answer: string;
}

interface LoginInputs {
  loginId: string;
  loginPassword: string;
}

enum QuestionList  {
  option1 = "내가 가장 좋아하는 영화는?",
  option2 = "내가 가장 좋아하는 장소는?",
  option3 = "내가 가장 좋아하는 색깔은?",
}
export {QuestionList}
export type {JoinInputs, LoginInputs};