import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Items{
    title: string,
}

const INITIAL_ITEMS: Items[] = [
    {title:'D&D Player\'s handbook'},
]

const sliceItems = createSlice({
    name: 'items',
    initialState: INITIAL_ITEMS,
    reducers:{
        addItems(state, { payload }:PayloadAction<string>){
            return [...state, {title: payload}]
        },
    }
})

export default sliceItems.reducer
export const {addItems} = sliceItems.actions

export const useItems = (state:any)=>{
    return state.items as Items[]
}