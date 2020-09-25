export default interface profileData {
  id: string;
  user: user;
  pic: pic;
  bio: string;
  post: post;
  posts: post[];
}

export interface user {
  username: string;
  first: string;
  last: string;
}

export interface pic {
  source: string;
  color: string;
};

export interface post {
  id: string;
  image: string;
};