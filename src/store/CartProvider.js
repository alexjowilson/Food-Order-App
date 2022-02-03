import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    if(action.type === 'ADD')
    {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; // previous amount + (current item price * quantity of that item)


        /* check if the item is already in the cart, returns the index if exists, returns null if doesn't exist */
        const existingCartItemIndex = state.items.findIndex(item =>
            item.id === action.item.id
        );

        /* get the existing item */
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        /* if the item exists in cart */
        if(existingCartItem)
        {
            // copy the current item already in cart and update amount 
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            /* copy current state of array */
            updatedItems = [...state.items];

            /* update the existing item in array to the updated item */
            updatedItems[existingCartItemIndex] = updatedItem;

        }
        /* else, the item is added into the cart for the first time */
        else
        {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    /* remove the item in cart */
    if(action.type === 'REMOVE')
    {
       
        /* find the existing item in the array */
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );        

        /* get a hold of the existing item in the array */
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        /* if there is only 1 left of the item */
        if(existingItem.amount === 1)
        {
            /* remove item from array */
            updatedItems = state.items.filter(item => item.id !== action.id);
        }

        /* there is more than 1 */
        else
        {
            /* update the amount */
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}; 

            /* copy all existing elements into new array */
            updatedItems = [...state.items];

            /* update the existing cart element to the updateItem */
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};

const CartProvider = (props) =>
{
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);



    const addItemToCartHandler = (item) =>
    {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) =>
    {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler, 
        removeItem: removeItemFromCartHandler
    };


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;