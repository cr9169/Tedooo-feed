import "./UserDetails.css";
import React from "react";

interface UserDetailsProps {
  username: string;
  shopName: string;
  avatar: string;
  date: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  username,
  shopName,
  avatar,
  date,
}) => {
  /**
   * Formats elapsed time from a given date string to a human-readable format
   * @param dateString - ISO date string to calculate time from
   * @returns Formatted string like "5y", "3d", "2h", "30m" or "45s"
   */
  const formatTimeElapsed = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - inputDate.getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    const elapsedHours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
    const elapsedDays = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
    const elapsedYears = Math.floor(elapsedDays / 365);

    if (elapsedYears >= 1) return `${elapsedYears}y`;
    if (elapsedDays >= 1) return `${elapsedDays}d`;
    if (elapsedHours >= 1) return `${elapsedHours}h`;
    if (elapsedMinutes >= 1) return `${elapsedMinutes}m`;
    return `${Math.floor(elapsedMilliseconds / 1000)}s`;
  };

  return (
    <div className="user-details-main-section">
      <img src={avatar} alt="Avatar" />
      <div className="user-details">
        <span className="details-username">{username}</span>
        <div className="details-subinfo">
          <span className="details-shop-name">{shopName}</span>
          <span className="details-time-elapsed">
            {" "}
            · {formatTimeElapsed(date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
