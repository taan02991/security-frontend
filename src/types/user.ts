export interface User {
  _id: string;
  username: string;
  role: string;
}
export interface UserState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: User | null;
}

export enum UserGetters {
  getUser = 'getUser'
}

export enum UserMutations {
  fetching = 'fetching',
  success = 'success',
  error = 'error',
  setUser = 'setUser',
  setPosts = 'setPosts'
}

export enum UserActions {
  fetchUser = 'fetchUser',
  setFetching = 'setFetching',
  setSuccess = 'setSuccess',
  setError = 'setError',
  updateProfile = 'updateProfile',
  uploadImage = 'uploadImage',
  fetchPosts = 'fetchPosts'
}
