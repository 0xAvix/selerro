import React, { useState } from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';
import MoreMenuMobile from '../more-menu-mobile/more-menu-mobile.component';

const Footer = ({ currentUser, signOutStart }) => {
  const currentYear = new Date().getFullYear();

  const [isClicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!isClicked);

  return (
    <>
      <div className='footer'>
        <p className='copyright'>
          &copy; {currentYear} Selerro, Inc. All Rights Reserved.
        </p>
      </div>
      <div className='mobile-header'>
        <div className='icon-container'>
          <Link to='/' title='Home'>
            <HomeIcon className='home-menu-icon' />
          </Link>
        </div>
        <div className='icon-container'>
          <Link to='/shop' title='Shop'>
            <ShoppingCartIcon className='shop-menu-icon' />
          </Link>
        </div>
        {currentUser ? (
          <div className='icon-container'>
            <Link as='div' title='Sign Out' onClick={() => auth.signOut()}>
              <span className='backslash'>\</span>
              <AccountCircleIcon className='sign-in-menu-icon sign-out-icon' />
            </Link>
          </div>
        ) : (
          <div className='icon-container'>
            <Link to='/signin' title='Sign In'>
              <AccountCircleIcon className='sign-in-menu-icon' />
            </Link>
          </div>
        )}
        {isClicked && <MoreMenuMobile />}
        <div className='icon-container'>
          <MoreHorizIcon className='more-menu-icon' onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
