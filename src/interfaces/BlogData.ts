export interface BlogComment {
  username: string;
  email: string;
  comment: string;
  comments: BlogComment[];
}

export interface BlogPost {
  title: string;
  text: string;
  comments: BlogComment[];
}
