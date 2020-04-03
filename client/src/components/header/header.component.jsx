import React, { useContext } from "react";
import * as logo from "../../assets/selerro-big-logo.png";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  LogoText,
  OptionsContainer,
  OptionLink,
  CartIconOptionLink
} from "./header.styles.jsx";
import { signOutStart } from "../../redux/user/user.actions.js";
import { CartContext } from "../../providers/cart/cart.provider.jsx";
import "./mobile.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, signOutStart }) => {
  const { hidden } = useContext(CartContext);

  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo alt="logo" src={logo} width="72px" height="72px" />
        </LogoContainer>
        <div className="logo-text-container">
          <LogoText to="/">Selerro</LogoText>
        </div>
        <OptionsContainer>
          <OptionLink to="/">HOME</OptionLink>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/about">ABOUT</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <div className="cart-icon-container-mobile">
            <CartIconOptionLink>
              <CartIcon />
            </CartIconOptionLink>
          </div>
        </OptionsContainer>
        {!hidden && <CartDropdown />}
      </HeaderContainer>
      <div style={{ height: "15px" }} />
      <hr />
      <br />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
