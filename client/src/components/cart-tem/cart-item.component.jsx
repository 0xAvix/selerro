import React, { useContext } from "react";
import "./cart-item.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";

const CartItem = ({ item }) => {
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const { name, price, imageUrl, quantity } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <div className="add-remove-clear">
          <span onClick={() => addItem(item)} className="add-arrow">
            +
          </span>
          <span onClick={() => removeItem(item)} className="remove-arrow">
            -
          </span>
          <span onClick={() => clearItemFromCart(item)} className="clear-x">
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
