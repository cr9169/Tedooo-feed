import "./UserDetails.css";

interface UserDetailsProps {
  username: string;
  shopName: string;
  avatar: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  username,
  shopName,
  avatar,
}) => {
  return <div className="user-details-main-section"></div>;
};

export default UserDetails;
