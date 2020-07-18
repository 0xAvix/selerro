import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as logo from '../../assets/selerro-big-logo.png';
import axios from 'axios';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearCart } from '../../redux/cart/cart.actions.js';

const StripeCheckoutButton = ({ price, clearCart, cartItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_R7vs6Pv7FSS5SMKX2LkBCzhI007HeaYZo4';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Your Payment was Successful!');
      })
      .catch((error) => {
        alert(
          "There was an error when processing your payment. Please make sure you are using the provided Visa or Mastercard test credit cards and that your cart isn't empty!"
        );
        console.log('Payment error: ', JSON.parse(error));
      });
  };

  return (
    <StripeCheckout
      className='custom-button'
      billingAddress
      shippingAddress
      label='Buy Now'
      name='Stripe Electronics, Inc.'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Buy Now'
      image={logo}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
