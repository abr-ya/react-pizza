import React, { useState, useEffect, ReactElement } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { IApp } from "./interfaces";
import Loader from "./components/Loader/Loader";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import New from "./pages/New";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BsModal from "./components/BsModal/BsModal";
import Cart from "./components/Cart/Cart";
import BsAlert, { IAlert } from "./components/BsAlert/BsAlert";

const App: (prop: IApp) => ReactElement = ({
  requestProductsSaga,
  loading,
  products,
  sort,
  size,
  cart,
  setSort,
  setSize,
  addToCart,
  delFromCart,
  updateCart,
}: IApp) => {
  useEffect(() => {
    requestProductsSaga();
  }, [requestProductsSaga]);

  const [firstPizza, setFirstPizza] = useState("");
  const [alert, setAlert] = useState<IAlert>({
    show: false,
    text: "текст сообщения",
    type: "primary",
    showT: 2,
    outT: 1,
  });

  useEffect(() => {
    const firstPizzaText: string =
      products.length > 0 && Object.keys(cart).length > 0
        ? products.find(({ id }) => `${id}` === Object.keys(cart)[0].slice(1))
            .title
        : "пицца не выбрана";
    setFirstPizza(firstPizzaText);
  }, [cart, products]);

  const handleRemoveFromCart = (id: string) => {
    // console.log('handleRemoveFromCart', id);
    delFromCart(id);
  };

  // basename={process.env.NODE_ENV === "development" ? "/" : "/demo/pizza/"} // BrowserRouter
  return (
    <BrowserRouter>
      <Header inCart={Object.keys(cart).length} firstPizza={firstPizza} />
      <div className="header-bg" />
      {loading ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                setSort={setSort}
                setSize={setSize}
                addToCart={addToCart}
                products={products}
                sort={sort}
                size={size}
                setAlert={setAlert}
              />
            )}
          />
          <Route
            path="/about"
            component={() => <About setAlert={setAlert} />}
          />
          <Route path="/new" component={New} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      )}
      <Footer />
      <BsModal id="bsModal1" title="Ваш заказ">
        <Cart
          products={products}
          cartItems={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          updateCart={updateCart}
        />
      </BsModal>
      {alert.show && <BsAlert alert={alert} setAlert={setAlert} />}
    </BrowserRouter>
  );
};

export default App;
