import { configureStore } from '@reduxjs/toolkit'
import stuSlice from './slices/stuSlice'
import todoSlice from './slices/todoSlice'

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个Slice
    reducer: {
        student: stuSlice,
        todo: todoSlice
    },
})

export default store