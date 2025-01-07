export default interface IFeedItem {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  shopName: string;
  shopId: string;
  images: string[]; // Array of image URLs
  comments: number;
  date: string; // ISO date string
  text: string;
  likes: number;
  didLike: boolean;
  premium: boolean;
}
