interface JoinInputs {
  joinId: string;
  joinPassword: string;
  joinPasswordConfirm: string;
  name: string;
  email: string;
}

interface LoginInputs {
  loginId: string;
  loginPassword: string;
}

export type {JoinInputs, LoginInputs};