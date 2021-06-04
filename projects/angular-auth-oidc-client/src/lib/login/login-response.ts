export interface LoginResponse {
  isAuthenticated: boolean;
  userData?: any;
  accessToken?: string;
  errorMessage?: string;
  configId?: string;
}
