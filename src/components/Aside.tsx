import { AsideItem } from "./AsideItem";

export function Aside(){
    return(
        <aside className='w-[25%] border border-solid flex flex-col p-2'>
          <h1 className='border-solid border-b px-2'>Themes</h1>
          <AsideItem>Dungeons & Dragons</AsideItem>
          <AsideItem>Tormenta</AsideItem>
          <AsideItem>3D&T</AsideItem>
          <AsideItem>Wondera Chaos RPG</AsideItem>
        </aside>
    )
}