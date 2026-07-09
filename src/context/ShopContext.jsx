import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from 'react-toastify'

export const ShopContext = createContext();

function ShopContextProvider(props) {
  const currency = `$`;
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success('Added to cart!');
  };

  const getCartCount = () => {
  let totalCount = 0;

  for (const productId in cartItems) {
    for (const size in cartItems[productId]) {
      totalCount += cartItems[productId][size];
    }
  }

  return totalCount;
};

const updateQuantity = async (itemId, size, quantity) => {
  let cartData = structuredClone(cartItems)

  cartData[itemId][size] = quantity;

  setCartItems(cartData);
}


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
