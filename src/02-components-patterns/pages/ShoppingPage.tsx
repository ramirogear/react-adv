import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {


  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <ProductCard key={ product.id } product={ product } className="bg-dark" initialValues={{ count: 4, maxCount: 10 }}>
          {
            ( { reset, count, isMaxCountReached, maxCount, increaseBy } ) => (
            <>
              <ProductImage className="custom-image"/>
              <ProductTitle title={""} className="text-white" />
              <ProductButtons className="custom-buttons"/>

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>
              {
                ( !isMaxCountReached && <button onClick={ () => increaseBy(+2) }>+2</button> )
              }
              <span>{ count }</span>
            </>
            )
          }
        </ProductCard>
    </div>
  )
}
