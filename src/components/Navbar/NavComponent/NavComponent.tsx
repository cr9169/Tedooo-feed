import { useState } from "react";
import "./NavComponent.css";
import homeIcon from "../../../assets/home.svg";
import messagingIcon from "../../../assets/messaging.svg";
import notificationsIcon from "../../../assets/notifications.svg";

type Section = "Home" | "Messaging" | "Notifications";

const navMapping: { [key: string]: string } = {
  Home: homeIcon,
  Messaging: messagingIcon,
  Notifications: notificationsIcon,
};

const NavComponent: React.FC = () => {
  const [chosenSection, setChosenSection] = useState<Section>("Home");

  return (
    <div className="nav-component-main">
      {Object.entries(navMapping).map(([key, value]) => (
        <div
          key={key}
          className={`nav-item ${chosenSection === key ? "active" : ""}`}
          onClick={() => setChosenSection(key as Section)}
        >
          <img
            src={value}
            alt={`${key} icon`}
            className={`nav-icon ${chosenSection === key ? "active" : ""}`}
          />
          <span>{key}</span>
          {chosenSection === key && <div className="active-indicator" />}
        </div>
      ))}
    </div>
  );
};

export default NavComponent;
