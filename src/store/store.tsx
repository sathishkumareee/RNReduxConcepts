import {configureStore} from '@reduxjs/toolkit'
import taskreducer  from '../slices/taskslice'

export const store=configureStore({
    reducer:{
        tasks:taskreducer
    }
})

export type IRootState = ReturnType<typeof store.getState>