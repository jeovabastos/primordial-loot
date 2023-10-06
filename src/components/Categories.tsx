import { CategoryItem } from "./CategoryItem";

export function Categories(){
    return(
          <section className='flex border border-solid p-4 gap-4'>
            <CategoryItem title="Books" source="/rpg-stock-photo/books-category.jpg"/>
            <CategoryItem title="Miniatures" source="/rpg-stock-photo/miniature1.jpeg"/>
          </section>
    )
}