import React from 'react';
import { Link } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title' style={{ textTransform: 'uppercase' }}>
      <Link className='collection-link' to={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </Link>
    </h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default React.memo(CollectionPreview);
