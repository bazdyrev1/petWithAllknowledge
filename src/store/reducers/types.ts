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

export interface IGitData {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  score: number,
  status: string | null,
  error: string | null
}