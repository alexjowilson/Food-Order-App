import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

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
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
