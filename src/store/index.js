import { configureStore } from '@reduxjs/toolkit'

import count from './slices/count'
import profile from './slices/profile'

const store = configureStore({
    reducer: {
        count,
        profile
    }
})

export default store