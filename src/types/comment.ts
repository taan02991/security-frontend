import { User } from '@/types/user'

export interface Comment {
    id: string;
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
    dialog: boolean;
    comment: Comment | null;
}

export enum CommentGetters {
  }

export enum CommentMutations {
  setComment = 'setComment',
  setDialog = 'setDialog'
  }

export enum CommentActions {
    createComment = 'createComment',
    deleteComment = 'deleteComment',
    editComment = 'editComment',
    setComment = 'setComment',
    setDialog = 'setDialog'
  }
