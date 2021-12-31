export interface SignInFormData {
  email: string;
  password: string;
}

export interface UserSession {
  id: string;
  email: string;
}

export interface UserSessionStore {
  id: string;
  email: string;
  loggedIn?: boolean;
  fetching: boolean;
  errorMessage: string;
}
