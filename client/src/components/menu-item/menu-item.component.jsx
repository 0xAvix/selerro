import React, { useCallback } from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ size, history, match, linkUrl, imageUrl, title }) => (
  <div
    className={`${size} menu-item`}
    onClick={useCallback(() => history.push(`${match.url}${linkUrl}`), [
      history,
      match,
      linkUrl,
    ])}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
