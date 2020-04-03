import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title" style={{ textTransform: 'uppercase' }}>
      <a className="collection-link" href={`/shop/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </a>
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default React.memo(CollectionPreview);
