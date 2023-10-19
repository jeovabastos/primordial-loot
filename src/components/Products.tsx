import { ProductItem } from "./ProductItem";

export function Products({handleClickCartValue}:{handleClickCartValue:any}){
    return(
          <section className='flex flex-wrap border border-solid p-4 gap-4'>
            <ProductItem 
              handleClickCartValue={handleClickCartValue} 
              source="/rpg-stock-photo/book-1.png" 
              title="Monster Manual" 
              price='300,00' 
              text="Dungeons & Dragons official bestiary"
            />
            <ProductItem
              handleClickCartValue={handleClickCartValue} 
              source="/rpg-stock-photo/book-2.png" 
              title="Player's Handbook" 
              price="300,00" 
              text="Dungeons & Dragons official player's manual"
            />
            <ProductItem 
              handleClickCartValue={handleClickCartValue}
              source="/rpg-stock-photo/book-3.png" 
              title="Dungeon Master's Guide" 
              price="300,00" 
              text="Dungeons & Dragons official master's guide"
            />
            <ProductItem 
              handleClickCartValue={handleClickCartValue}
              source="/rpg-stock-photo/book-4.jpg" 
              title="Call of Cthulhu" 
              price="280,00" 
              text="Cthulhu's tabletop RPG guide"
            />
            <ProductItem 
              handleClickCartValue={handleClickCartValue}
              source="/rpg-stock-photo/book-5.jpg" 
              title="The Witcher" 
              price="200,00" 
              text="Witcher's tabletop RPG guide"
            />
            <ProductItem 
              handleClickCartValue={handleClickCartValue}
              source="/rpg-stock-photo/book-6.jpg" 
              title="Tormenta 20" 
              price="150,00" 
              text="Brazilian tabletop RPG"
            />
          </section>
    )
}