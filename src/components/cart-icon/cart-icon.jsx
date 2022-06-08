import React from 'react';
import { connect } from 'react-redux';

import { selectCArtItemsCount } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';


import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shoping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: selectCArtItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);