export interface IImage {
  dataURL: string;
}

export interface IAllPosts {
  type: string;
  postId: string;
  authorId: string;
  authorName: string;
  title: string;
  mainImage: IImage[];
  content: string;
  date: string;
  additionalImages: IImage[];
}
export interface ISingIn {
  isAdmin: boolean;
  isAuth: boolean;
  login: string;
}
export interface IUsers {
  nickName: string;
  authorName: string;
  mail: string;
  password: string;
  role: string;
  authorId: string;
}
