import React, { useState } from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

export default function Topbar() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(2);
  const [dismissedNotifications, setDismissedNotifications] = useState([]);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setBadgeCount(0);
  };

  const notifications = [
    { id: 1, message: "شما در حال مشاهده نمونه کار علیرضا دیانت هستید" },
    { id: 2, message: "امیدوارم مورد قبول باشد" },
  ];

  const handleDismiss = (id) => {
    setDismissedNotifications([...dismissedNotifications, id]);
    setTimeout(() => {
      setDismissedNotifications((prev) => prev.filter((notifId) => notifId !== id));
    }, 400); 
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Alireza Dianat</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer" onClick={handleNotificationClick}>
            <NotificationsIcon />
            {badgeCount > 0 && <span className="topIconBadge">{badgeCount}</span>}
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/user.png`} className="topAvatar" alt="User Avatar" />
        </div>
      </div>

      {isNotificationOpen && (
        <div className="notificationOverlay" onClick={() => setIsNotificationOpen(false)}>
          <div className="notificationPanel" onClick={(e) => e.stopPropagation()}>
            <div className="notificationHeader">
              <h3>نوتیفیکیشن‌ها</h3>
              <CloseIcon onClick={() => setIsNotificationOpen(false)} className="closeIcon" />
            </div>
            <div className="notificationContent">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notificationItem ${dismissedNotifications.includes(notification.id) ? "fade-out" : ""}`}
                >
                  <span>{notification.message}</span>
                  <button className="dismissButton" onClick={() => handleDismiss(notification.id)}>
                    بستن
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
