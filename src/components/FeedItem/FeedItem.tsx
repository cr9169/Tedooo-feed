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
        date={item.date}
      />
      <p>{item.text}</p>
      <div className="post-images">
        {item.images.slice(0, 2).map((image, index) => (
          <img key={index} src={image} alt="Post Image" />
        ))}
      </div>
      <CountersSection likes={item.likes} comments={item.comments} />
      <hr />
      <ActionsSection />
    </div>
  );
};

export default FeedItem;
