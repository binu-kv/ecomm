import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden })=> (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <CartIcon />
            <Link className='option' to='/shop'>SHOP</Link>
            {   
                currentUser ?
                <Link to='/'><div className='option'  onClick={()=>auth.signOut()}>SIGN OUT</div></Link>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });

export default connect(mapStateToProps)(Header);