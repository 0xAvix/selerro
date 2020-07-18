import React from 'react';
import './menu-item.styles.scss';
import { withRouter, Link } from 'react-router-dom';

const MenuItem = ({ size, imageUrl, title }) => (
  <Link className={`${size} menu-item`} to={`/shop/${title}`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </Link>
);

export default withRouter(MenuItem);
