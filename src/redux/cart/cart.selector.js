import { createSelector } from 'reselect';


const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)


export const selectCArtItemsCount = createSelector (
    [selectCartItems],
    (cartItems => cartItems.reduce((accumalateQuantity, cartItem) => accumalateQuantity + cartItem.quantity, 0))
)