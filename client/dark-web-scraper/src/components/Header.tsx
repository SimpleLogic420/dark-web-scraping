import React from "react";

function Header() {
  return (
    <div className="header">
        <div className="rightDiv">
          <div className="superRightDiv">
          <h1 className="pageTitle">Dark-Web-pastes</h1>
      <p>Posts from strongHold site</p>
          </div>
        <div className="leftRightDiv"></div>
        </div>
     
      <div className="searchDiv">
          <br/>
          <br/>
        <form action="submit" className="searchForm">
          <span>Search:</span>
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            placeholder="search for paste"
          />
          <section>
            <p>
              <button type="submit">Search</button>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Header;
