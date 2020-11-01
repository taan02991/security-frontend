import { User } from '@/types/user'
import { Comment } from '@/types/comment'

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
    post: Post | null;
    comments: Comment[];
  }

export enum PostGetters {
  }

export enum PostMutations {
      setPosts = 'setPosts',
      setPost = 'setPost'
  }

export enum PostActions {
    fetchPost = 'fetchPost',
    fetchAllPosts = 'fetchAllPost',
    createPost = 'createPost'
  }
