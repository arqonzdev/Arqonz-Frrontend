export interface LoginFormData {
  phone: string;
  otp?: string;
  method: "mobile" | "email";
}

export interface RegisterFormData {
  email: string;
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
  agentId?: string;
  newsletter?: boolean;
  optimizeOffers?: boolean;
}
