import "./ActionsSection.css";
import likesIcon from "../../../assets/like.svg";
import commentsIcon from "../../../assets/comment.svg";

interface ActionsSectionProps {
  liked: boolean;
}

const ActionsSection: React.FC<ActionsSectionProps> = ({ liked }) => {
  return (
    <div className="actions-section-main">
      <div className={`like-action ${liked ? "liked" : ""}`}>
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
