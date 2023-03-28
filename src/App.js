import React, {useState} from "react";
//Components
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  //  Hooks
  const [cartIsShown, setCartIsShown] = useState(false);
  const manageCartHandler = () => {
    cartIsShown ? setCartIsShown(false) : setCartIsShown(true);
  };
  
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={manageCartHandler}/>}
      <Header onShowCart={manageCartHandler}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
