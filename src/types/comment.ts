import { User } from '@/types/user'

export interface Comment {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    author: User;
  }

export interface CommentForm {
    title: string;
    content: string;
    postId: string;
  }

export interface CommentState {
    a: string;
}

export enum CommentGetters {
  }

export enum CommentMutations {
  }

export enum CommentActions {
    createComment = 'createComment'
  }
