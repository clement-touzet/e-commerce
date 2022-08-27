import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
