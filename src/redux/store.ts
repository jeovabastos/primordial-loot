import { configureStore } from '@reduxjs/toolkit'
import sliceItems from './sliceItems'

const store = configureStore({
    reducer:{
        items: sliceItems,
    }
})

export type RootState = ReturnType<typeof store['getState']>

export default store