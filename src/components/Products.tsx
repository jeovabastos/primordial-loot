import { ProductItem } from "./ProductItem";

export function Products(){
    return(
          <section className='flex flex-wrap border border-solid p-4 gap-4'>
            <ProductItem source="/rpg-stock-photo/book-1.png"/>
            <ProductItem source="/rpg-stock-photo/book-2.png"/>
            <ProductItem source="/rpg-stock-photo/book-3.png"/>
            <ProductItem source="/rpg-stock-photo/book-4.jpg"/>
            <ProductItem source="/rpg-stock-photo/book-5.jpg"/>
            <ProductItem source="/rpg-stock-photo/book-6.jpg"/>

          </section>
    )
}