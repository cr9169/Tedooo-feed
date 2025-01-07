import "./SearchField.css";
import searchIcom from "../../../assets/search.svg";

const SearchField: React.FC = () => {
  return (
    <div className="search-field-main-section">
      <img src={searchIcom} alt="Search icon" />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchField;
