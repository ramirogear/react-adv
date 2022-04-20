
import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Props } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; 

export const ProductCard = ({ children, product }: Props) => {  

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>
          {/*<img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug" />*/}

          {/* <ProductImage img={ product.img }/>

          <ProductTitle title={ product.title } />

          <ProductButtons increaseBy={ increaseBy } counter={ counter }/> */}
          { children }

      </div>
    </Provider>
  )
}

//ProductCard.Title   = ProductTitle;
//ProductCard.Image   = ProductImage;
//ProductCard.Buttons = ProductButtons;
