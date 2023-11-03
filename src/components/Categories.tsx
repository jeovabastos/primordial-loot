import { CategoryItem } from "./CategoryItem";

export function Categories(){

  return(
      <>
          <section className='bg-gray-100 border border-solid overflow-x-scroll lg:overflow-x-hidden w-screen lg:w-full'>
            <div className="flex flex-row p-4 gap-4  w-max lg:w-full">
              <CategoryItem title="Books" source="/rpg-stock-photo/books-category.jpg"/>
              <CategoryItem title="Miniatures" source="/rpg-stock-photo/miniature1.jpeg"/>
              <CategoryItem title="Accessories" source="/rpg-stock-photo/stuff2.jpeg"/>
              <CategoryItem title="Decor" source="/rpg-stock-photo/stuff3.jpg"/>
            </div>
          </section>
      </>
    )
}