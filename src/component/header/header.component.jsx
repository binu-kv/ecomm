import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as Logo } from '../../assets/home-icon.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden })=> (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <CartIcon />
            <Link className='option' to='/shop'>SHOP</Link>
            {currentUser ? (
                <Link to='/'><div className='option'  onClick={()=>auth.signOut()}>
                   SIGN OUT
                </div></Link>
                ) : (
                <Link className='option' to='/signin'>
                 SIGN IN
                </Link>
                )}
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
export default connect(mapStateToProps)(Header);