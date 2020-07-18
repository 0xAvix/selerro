import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import shopData from '../../shopData';

const CollectionsOverview = () => {
  return (
    <div className='collections-overview'>
      {shopData.map(({ id, ...otherCollectionPreviewProps }) => (
        <CollectionPreview key={id} {...otherCollectionPreviewProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
