import "./CountersSection.css";
import likesAmountIcon from "../../../assets/likes-amount-icon.png";

interface CountersSectionProps {
  likes: number;
  comments: number;
}

const CountersSection: React.FC<CountersSectionProps> = ({
  likes,
  comments,
}) => {
  return (
    <div className="counters-section-main">
      <div className="likes-amount-section">
        <img src={likesAmountIcon} alt="Likes amount icon" />
        <span>{likes} Likes</span>
      </div>
      <span>{comments} Comments</span>
    </div>
  );
};

export default CountersSection;
