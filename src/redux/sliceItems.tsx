import { 
    createSlice, 
    // PayloadAction 
} from '@reduxjs/toolkit'
import { RootState } from './store'; // assuming your store is defined in a file named store.ts

interface Items{
    title: string,
    price: string,
    text: string,
    source?: string
}

const INITIAL_ITEMS: Items[] = [
    {
        title:'Add some products!',
        price:'The price will be calculated here...',
        text:''
    },
]

const sliceItems = createSlice({
    name: 'items',
    initialState: INITIAL_ITEMS,
    reducers:{
        addItems(state, action){
            return [...state, action.payload]
        },
    }
})

export default sliceItems.reducer
export const {addItems} = sliceItems.actions

export const useItems = (state: RootState)=>{
    return state.items as Items[]
}