import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  /* state management for when a user clicks on the cart button */
  const [cartIsShown, setCartIsShown] = useState(false);

  /* handler for when the user clicks on cart */
  const showCartHandler = () => {
    console.log("setting cartIsShown to true!");
    setCartIsShown(true);
  };

  /* handler for when the user clicks out of the cart */
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
