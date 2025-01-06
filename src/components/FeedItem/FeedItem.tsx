import IFeedItem from "../../interface";
import ActionsSection from "./ActionsSection/ActionsSection";
import CountersSection from "./CountersSection/CountersSection";
import "./FeedItem.css";
import UserDetails from "./UserDetails/UserDetails";

interface FeedItemProps {
  item: IFeedItem;
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  return (
    <div className="feed-item-main-section">
      <UserDetails
        username={item.username}
        avatar={item.avatar}
        shopName={item.shopName}
      />
      <p>{item.text}</p>
      <div className="post-images">
        {item.images.slice(0, 2).map((image, index) => (
          <img key={index} src={image} alt="Post Image" />
        ))}
      </div>
      <CountersSection />
      <ActionsSection />
    </div>
  );
};

export default FeedItem;
