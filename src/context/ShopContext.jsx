import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

function ShopContextProvider(props) {

  const currency = `$`;
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
