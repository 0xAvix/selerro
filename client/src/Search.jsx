import React, { useState } from 'react';
import items from './data/shopData';
import CollectionItem from './components/collection-item/collection-item.component';
import { useMediaQuery } from 'react-responsive';
import './Search.scss';

const Search = () => {
  const [searchField, setSearchField] = useState('');
  const handleChange = (e) => setSearchField(e.target.value);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '150px',
      }}
    >
      <h1
        style={{ fontSize: '3em', marginTop: isMobile ? '70px' : '15px' }}
        className='search-title'
      >
        Search Products
      </h1>
      <input
        type='search'
        autoComplete='off'
        spellCheck='false'
        value={searchField}
        onChange={handleChange}
        name='searchField'
        placeholder='Search Items...'
        style={{
          marginBottom: '50px',
          border: 'none',
          border: '1px solid #333',
          padding: '7px',
          borderRadius: '5px',
          boxShadow: '1px 2px #000',
          outline: 'none',
        }}
      />
      <div className='search-items'>
        {filteredItems.length ? (
          filteredItems.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        ) : (
          <h3 className='no-matches'>No Matches Found.</h3>
        )}
      </div>
    </div>
  );
};

export default Search;
