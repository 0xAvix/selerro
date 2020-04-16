import React, { useState } from 'react';
import items from './items';

const Item = ({ name, price, imageUrl }) => (
  <div>
    <h1>{name}</h1>
    <img src={imageUrl} alt={name} />
    <h2>Price: ${price}</h2>
  </div>
);

const ItemList = ({ items }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridGap: '15px',
    }}
  >
    {items.map(({ id, ...otherProps }) => (
      <Item key={id} {...otherProps} />
    ))}
  </div>
);

const Search = () => {
  const [searchField, setSearchField] = useState('');
  const handleChange = (e) => setSearchField(e.target.value);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

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
      <h1 style={{ fontSize: '2.5em' }}>Search Items</h1>
      <input
        type='search'
        autoComplete='off'
        spellCheck='false'
        value={searchField}
        onChange={handleChange}
        name='searchField'
        placeholder='Search Items...'
        style={{ marginBottom: '50px' }}
      />
      {filteredItems.length ? (
        <ItemList items={filteredItems} />
      ) : (
        <h3>No Matches Found.</h3>
      )}
    </div>
  );
};

export default Search;
