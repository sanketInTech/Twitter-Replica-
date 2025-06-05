export interface User {
  id: string;
  username: string;
  handle: string;
  bio: string;
  avatar: string;
  followers: string;
  following: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: string;
  retweets: string;
  replies: string;
} 