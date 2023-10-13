import { ProductItem } from "./ProductItem";

export function Products({handleClickCartValue}:{handleClickCartValue:any}){
    return(
          <section className='flex flex-wrap border border-solid p-4 gap-4'>
            <ProductItem handleClickCartValue={handleClickCartValue} source="/rpg-stock-photo/book-1.png" title="Monster Manual" price='300,00' text="Dungeons & Dragons official bestiary"/>
            {/* <ProductItem source="/rpg-stock-photo/book-2.png" title="Player's Handbook" price="300,00" text="Dungeons & Dragons official player's manual"/>
            <ProductItem source="/rpg-stock-photo/book-3.png" title="Dungeon Master's Guide" price="300,00" text="Dungeons & Dragons official master's guide"/>
            <ProductItem source="/rpg-stock-photo/book-4.jpg" title="" price="" text=""/>
            <ProductItem source="/rpg-stock-photo/book-5.jpg" title="" price="" text=""/>
            <ProductItem source="/rpg-stock-photo/book-6.jpg" title="" price="" text=""/> */}

          </section>
    )
}