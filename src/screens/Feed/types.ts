export interface Data {
  data: Post;
}

export interface Post {
  Image:       Image;
  ProfileBar:  ProfileBar;
  Description: Description;
  Comments:    Comment[];
  timestamp:   number;
}

export interface Comment {
  username: string;
  text:     string;
}

export interface Description {
  text: string;
}

export interface Image {
  high:  string;
  low:   string;
  color: string;
}

export interface ProfileBar {
  pic:      Pic;
  username: string;
}

export interface Pic {
  source: string;
}
