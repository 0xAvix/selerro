import React, { useState } from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import shopData from '../../data/shopData';

const CollectionsOverview = ({ collections }) => {
  const [searchField, setSearchField] = useState('');
  const handleChange = (e) => setSearchField(e.target.value);
  const filteredItems = shopData.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='collections-overview'>
      {/* <h1 style={{ fontSize: '2.5em' }}>Search Products</h1>
      <input
        type='search'
        autoComplete='off'
        spellCheck='false'
        value={searchField}
        name='searchField'
        onChange={handleChange}
        placeholder='Search Items...'
        className='search-input'
        style={{
          marginBottom: '25px',
          marginTop: '10px',
        }}
      />
      <div className='line-below-search' /> */}
      {collections.map(({ id, ...otherCollectionPreviewProps }) => (
        <CollectionPreview key={id} {...otherCollectionPreviewProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
