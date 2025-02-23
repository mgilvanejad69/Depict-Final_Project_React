import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/SiteBody/Home";
import Products from "./components/SiteBody/Products";
import { useRef, useState } from "react";
import { AddToCardContext } from "./Context/AddToCardContext";
import ProductDetail from "./components/SiteBody/ProductDetail";
import { useForm } from "react-hook-form";

function App() {
  const [addToCard, setAddToCard] = useState(0);
  const [cardList, setCardList] = useState([]);
  const categoryRef = useRef();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const SignInRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileInfo, setUserProfileInfo] = useState({});
  const [inShopping, setInShopping] = useState(false);
  const [signInisOpen, setSignInisOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <BrowserRouter>
        <AddToCardContext.Provider
          value={{
            addToCard,
            setAddToCard,
            cardList,
            setCardList,
            categoryRef,
            categoryProducts,
            setCategoryProducts,
            SignInRef,
            userProfileInfo,
            setUserProfileInfo,
            isLoggedIn,
            setIsLoggedIn,
            inShopping,
            setInShopping,
            signInisOpen,
            setSignInisOpen,
            register,
            handleSubmit,
            reset,
          }}
        >
          <Layout addToCard={addToCard}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Products" element={<Products />}></Route>
              <Route path="/Products/:id" element={<ProductDetail />}></Route>
            </Routes>
          </Layout>
        </AddToCardContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
