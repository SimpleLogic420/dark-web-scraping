import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom"; // Link will switch <a> tag
import { IconButton, Badge } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

interface props {
  newAlerts: number;
  zeroNewAlerts: () => void;
}
function Linklist({ newAlerts, zeroNewAlerts }: props) {
  return (
    <ul className="nav_list row">
      <Item linkName="Paste list 🚩" link="/" key="pastelist" />
      <Item linkName="Key words 🗝️" link="/keyword" key="keyWords" />
      <Item linkName="Alerts ⚠️" link="/alerts" key="alerts"></Item>
      <Link
        onClick={() => {
          zeroNewAlerts();
        }}
        className="nav__link"
        to={"/notifications"}
      >
        <IconButton
          size="small"
          aria-label="show new notifications"
          color="inherit"
        >
          <Badge badgeContent={newAlerts} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Link>
    </ul>
  );
}

export default Linklist;
