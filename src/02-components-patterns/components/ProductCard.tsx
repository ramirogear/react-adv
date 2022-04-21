
import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext; 

export interface Props{
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}



export const ProductCard = ({ children, product, className, style }: Props) => {  

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ `${styles.productCard} ${ className }` } style={ style }>
          {/*<img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug" />*/}

          {/* <ProductImage img={ product.img }/>

          <ProductTitle title={ product.title } />

          <ProductButtons increaseBy={ increaseBy } counter={ counter }/> */}
          { children }

      </div>
    </Provider>
  )
}
