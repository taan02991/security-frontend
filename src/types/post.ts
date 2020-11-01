import { User } from '@/types/user.ts'

export interface Post {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    author: User;
  }

export interface PostForm {
    title: string;
    content: string;
  }

export interface PostState {
    posts: Post[];
  }

export enum PostGetters {
  }

export enum PostMutations {
      setPosts = 'setPosts'
  }

export enum PostActions {
    fetchPost = 'fetchPost',
    fetchAllPost = 'fetchAllPost',
    createPost = 'createPost'
  }
