import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';


const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton >Go To CheckOut</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems} }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);