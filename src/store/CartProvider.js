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
        const existingCartItemIndex = state.items.findIndex(item =>{
            return item.id === action.item.id;
        });

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

    else if(action.type === 'REMOVE')
    {

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