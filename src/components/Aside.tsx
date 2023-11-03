import { AsideItem } from "./AsideItem";

export function Aside({asideArea}:{asideArea?:any}){

  let mobileStyles = 'z-10 absolute left-0 w-[75%] h-full'

  return(
        <aside className={asideArea+' lg:z-0 lg:w-[30%] lg:block lg:relative bg-gray-50 border border-solid flex-col p-2'+mobileStyles}>
          <h1 className='border-solid border-b px-2'>Themes</h1>
          <AsideItem>Dungeons & Dragons</AsideItem>
          <AsideItem>Tormenta</AsideItem>
          <AsideItem>3D&T</AsideItem>
          <AsideItem>Wondera Chaos RPG</AsideItem>
        </aside>
    )
}