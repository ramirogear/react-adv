import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';
import { getValue } from "@testing-library/user-event/dist/utils";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {

  const { shoppingCart,onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{ display:'flex', flexDirection:'row', flexWrap:'wrap' }}>

          {
            products.map( product =>(
              <ProductCard key={ product.id } product={ product } className="bg-dark" value={ shoppingCart[product.id]?.count || 0 } onChange={ onProductCountChange } >
                <ProductImage className="custom-image"/>
                <ProductTitle title={""} className="text-white" />
                <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          } 
        </div>
        <div className="shopping-card">
            {
              Object.entries( shoppingCart ).map( ([key, product])=>(

                <ProductCard key={ key } product={ product } className="bg-dark" style={{ width:'100px' }} value={ product.count } onChange={ onProductCountChange } >
                  <ProductImage className="custom-image"/>
                  <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }}/>
                </ProductCard>

              ))
              
            }
              
        </div>
        <div>
          <code>
            { JSON.stringify( shoppingCart, null, 5 ) }
          </code>
        </div>
        
    </div>
  )
}
