import { configureStore } from '@reduxjs/toolkit'

// Redux
import stuSlice from './slices/stuSlice'
import todoSlice from './slices/todoSlice'

// RTKQ
import categorySlice from './apis/category'
import searchSlice from './apis/search'

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个Slice
    reducer: {
        student: stuSlice.reducer,
        todo: todoSlice.reducer,
        [categorySlice.reducerPath]: categorySlice.reducer,
        [searchSlice.reducerPath]: searchSlice.reducer
    },
    // 中间件
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(categorySlice.middleware)
            .concat(searchSlice.middleware)
})

export default store