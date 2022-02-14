import React from "react";
import './notifications.scss'
interface props {
  notifications: string[];
  deleteNotif:()=>void;
}
function Notifications({ notifications, deleteNotif }: props) {
  return (
    <div className="notificationPage">
      <h1 className="notifTitle">Notifications :</h1>
      <button onClick={()=>deleteNotif()} className="setNotifBtn">Clear</button>
      <div className="notifList">
      {notifications.map((notif, i) => {
        return (<div key={i} className="notifBox">
          <h6 className="notifContent">{notif}</h6>
        </div>)
      })}
      </div>
    </div>
  );
}

export default Notifications;
