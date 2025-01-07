import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import IFeedItem from "./interface";
import FeedItem from "./components/FeedItem/FeedItem";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";

function App() {
  const [feedItems, setFeedItems] = useState<IFeedItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const LIMIT = 6;

  /**
   * Fetches feed items with pagination
   * @throws Error on failed API request
   */
  const fetchFeedItems = async () => {
    try {
      const response = await axios.get(`/feed?skip=${skip}&limit=${LIMIT}`);

      if (response.data && Array.isArray(response.data.data)) {
        setFeedItems((prev) => [...prev, ...response.data.data]);
        setHasMore(response.data.hasMore);
        setSkip((prev) => prev + LIMIT);
      }
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
        loader={<Loader />}
      >
        <div className="feed">
          {feedItems.map((item, index) => (
            <FeedItem key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
