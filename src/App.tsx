import "./App.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FeedItem from "./components/FeedItem/FeedItem";
import axios from "axios";
import IFeedItem from "./interface";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [feedItems, setFeedItems] = useState<IFeedItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);

  const fetchFeedItems = async () => {
    try {
      const response = await axios.get(
        `https://backend.tedooo.com/hw/feed.json?skip=${skip}`
      );
      setFeedItems((prev) => [...prev, ...response.data.items]);
      setHasMore(response.data.hasMore);
      setSkip((prev) => prev + 6);
    } catch (error) {
      console.error("Failed to fetch feed items:", error);
    }
  };

  useEffect(() => {
    fetchFeedItems();
  }, []);

  return (
    <div>
      <Navbar />
      <InfiniteScroll
        dataLength={feedItems.length}
        next={fetchFeedItems}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more items to load.</p>}
      >
        <div className="feed">
          {feedItems.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
