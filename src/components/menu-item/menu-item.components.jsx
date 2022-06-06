import React from "react";
import "./menu-items.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return (
    <div className="menu-container">
      <div
        className="menu-item"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          verticalAlign: "middle",
        }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
