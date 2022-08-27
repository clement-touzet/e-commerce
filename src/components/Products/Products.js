import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://www.frandroid.com/marques/apple/842094_test-macbook-air-m1-arm",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$10",
    image: "https://www.loding.fr/fr/13-chaussures",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
