import React, { useContext, useCallback } from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../providers/cart/cart.provider.jsx';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  const memoizedAddItem = useCallback(() => addItem(item), [addItem, item]);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={memoizedAddItem}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
