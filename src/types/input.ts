interface JoinInputs {
  joinId: string;
  joinPassword: string;
  joinPasswordConfirm: string;
  name: string;
  email: string;
  profile: FileList
}

interface LoginInputs {
  loginId: string;
  loginPassword: string;
}

export type {JoinInputs, LoginInputs};