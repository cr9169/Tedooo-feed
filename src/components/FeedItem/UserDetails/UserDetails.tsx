import "./UserDetails.css";
import React, { useMemo } from "react";

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
  const timeElapsed = useMemo(() => {
    const formatTimeElapsed = (dateString: string): string => {
      const inputDate = new Date(dateString);
      const currentDate = new Date();

      if (isNaN(inputDate.getTime())) {
        throw new Error("Invalid date format");
      }

      const elapsedMilliseconds = currentDate.getTime() - inputDate.getTime();
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
      const elapsedHours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
      const elapsedDays = Math.floor(
        elapsedMilliseconds / (1000 * 60 * 60 * 24)
      );
      const elapsedYears = Math.floor(elapsedDays / 365);

      if (elapsedYears >= 1) {
        return `${elapsedYears}y`;
      } else if (elapsedDays >= 1) {
        return `${elapsedDays}d`;
      } else if (elapsedHours >= 1) {
        return `${elapsedHours}h`;
      } else if (elapsedMinutes >= 1) {
        return `${elapsedMinutes}m`;
      } else {
        return `${elapsedSeconds}s`;
      }
    };

    return formatTimeElapsed(date);
  }, [date]);

  return (
    <div className="user-details-main-section">
      <img src={avatar} alt="Avatar" />
      <div className="user-details">
        <span className="details-username">{username}</span>
        <div className="details-subinfo">
          <span className="details-shop-name">{shopName}</span>
          <span className="details-time-elapsed"> · {timeElapsed}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
