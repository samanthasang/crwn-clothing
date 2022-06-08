import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';


const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton >Go To CheckOut</CustomButton>
    </div>
)

export default CartDropDown;