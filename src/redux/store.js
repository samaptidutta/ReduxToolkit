import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {CounterSlice} from '../featured/counter/CounterSlice.js'



export  const store = configureStore({
            reducer:{
                counter:CounterSlice.reducer
            }
})




