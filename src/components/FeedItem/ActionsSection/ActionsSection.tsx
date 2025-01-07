import "./ActionsSection.css";
import likesIcon from "../../../assets/like.svg";
import commentsIcon from "../../../assets/comment.svg";

const ActionsSection: React.FC = () => {
  return (
    <div className="actions-section-main">
      <div className="like-action">
        <img src={likesIcon} alt="Like icon" />
        <span>Like</span>
      </div>
      <div className="comment-action">
        <img src={commentsIcon} alt="Comment icon" />
        <span>Comment</span>
      </div>
    </div>
  );
};

export default ActionsSection;
