import React from "react";
import Item from "./Item";
function Linklist() {
  return (
    <ul className="nav_list">
      <Item linkName="Paste list" link="/" key="pastelist" />
      <Item linkName="Key words" link="/keyword" key="keyWords" />
      <Item linkName="Alerts" link="/alerts" key="alerts" />
    </ul>
  );
}

export default Linklist;
