export interface User {
  _id: string;
  username: string;
  role: string;
}
export interface UserState {
  user: User | null;
}

export enum UserGetters {
  getUser = 'getUser'
}

export enum UserMutations {
  setUser = 'setUser',
}

export enum UserActions {
  fetchUser = 'fetchUser',
}
