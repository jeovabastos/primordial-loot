import { 
    createSlice, 
    // PayloadAction 
} from '@reduxjs/toolkit'

interface Items{
    title: string,
    price: string,
    text: string,
    source?: string
}

const INITIAL_ITEMS: Items[] = [
    {
        title:'D&D Player\'s handbook',
        price:'300,00',
        text:'bla bla bla'
    },
]

const sliceItems = createSlice({
    name: 'items',
    initialState: INITIAL_ITEMS,
    reducers:{
        // addItems(state, { payload }:PayloadAction<string>){
        //     return [...state, {title: payload, price: payload, text: payload}]
        // },
        addItems(state, action){
            return [...state, action.payload]
        },
    }
})

export default sliceItems.reducer
export const {addItems} = sliceItems.actions

export const useItems = (state:any)=>{
    return state.items as Items[]
}