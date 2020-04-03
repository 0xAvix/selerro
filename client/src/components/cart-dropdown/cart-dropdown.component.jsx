import React, { useContext, useCallback } from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-tem/cart-item.component.jsx";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../providers/cart/cart.provider.jsx";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  const handleClick = useCallback(() => {
    history.push("/checkout");
    toggleHidden();
  }, [history, toggleHidden]);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
