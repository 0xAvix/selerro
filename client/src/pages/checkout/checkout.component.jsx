import React, { useContext } from "react";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component.jsx";
import { CartContext } from "../../providers/cart/cart.provider.jsx";

const expYear = new Date()
  .getFullYear()
  .toString()
  .slice(2, 4);

const CheckoutPage = () => {
  const { cartItemsTotal, cartItems } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">CHECKOUT</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block price-checkout-header">
          <span>Price</span>
        </div>
        <div className="header-block remove-x">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartItemsTotal}</span>
      </div>
      <StripeCheckoutButton price={cartItemsTotal} />
      <div className="test-warning">
        *Please Use the Following <strong>Test Credit Cards</strong> for
        Payments*
        <div style={{ height: "14px" }} />
        <strong>Visa:</strong> 4242 4242 4242 4242 - Exp: 12/{expYear} - CVV:
        123
        <br />
        <strong>Mastercard:</strong> 5555 5555 5555 4444 - Exp: 12/{expYear} -
        CVV: 123
      </div>
      <div style={{ height: "225px" }} />
    </div>
  );
};

export default CheckoutPage;
