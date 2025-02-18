import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/SiteBody/Home";
import Products from "./components/SiteBody/Products";
import { useRef, useState } from "react";
import { AddToCardContext } from "./Context/AddToCardContext";

function App() {
  const [addToCard, setAddToCard] = useState(0);
  const [cardList, setCardList] = useState([]);
  const categoryRef = useRef();
  const [categoryProducts, setCategoryProducts] = useState([]);

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
          }}
        >
          <Layout addToCard={addToCard}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Products" element={<Products />}></Route>
            </Routes>
          </Layout>
        </AddToCardContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
