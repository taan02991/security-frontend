export interface AuthState {
  token: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
}

export enum AuthGetters {
  isLogin = 'isLogin',
  getUser = 'getUser',
}

export enum AuthMutations {
  setToken = 'setToken',
  setUser = 'setUser',
}

export enum AuthActions {
  login = 'login',
  logout = 'logout',
  signUp = 'signUp',
  setAxiosHeader = 'setAxiosHeader',
  protectedRedirect = 'protectedRedirect',
  VerifyToken = 'VerifyToken'
}
