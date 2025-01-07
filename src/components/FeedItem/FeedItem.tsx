import "./FeedItem.css";
import IFeedItem from "../../interface";
import ActionsSection from "./ActionsSection/ActionsSection";
import CountersSection from "./CountersSection/CountersSection";
import UserDetails from "./UserDetails/UserDetails";
import axios from "axios";
import { useState, useEffect } from "react";

interface FeedItemProps {
  item: IFeedItem;
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  const [wasViewed, setWasViewed] = useState(false);

  useEffect(() => {
    /**
     * Creates IntersectionObserver to track when feed item becomes visible
     * Sends impression tracking request once when 50% of item is in viewport
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasViewed) {
          setWasViewed(true);
          axios
            .get(`/impression?itemId=${item.id}`)
            .catch((error) =>
              console.error("Failed to track impression:", error)
            );
        }
      },
      { threshold: 0.5 }
    );

    const feedItemElement = document.querySelector(
      `[data-feed-id="${item.id}"]`
    );

    if (feedItemElement) {
      observer.observe(feedItemElement);
    }

    return () => observer.disconnect();
  }, [item.id, wasViewed]);

  return (
    <div className="feed-item-main-section" data-feed-id={item.id}>
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
      <ActionsSection liked={item.didLike} />
    </div>
  );
};

export default FeedItem;
