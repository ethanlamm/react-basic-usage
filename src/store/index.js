import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import count from './slices/count'
import profile from './slices/profile'

const persistConfig = {
    key: 'redux-persist',
    storage,
    // 指定哪些reducer数据持久化(reducer的名字)
    whitelist: ['profile']
    // 若多个仓库写在一起，持久存储会在同一个中
    //  whitelist: ['profile','count']
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        count,
        profile
    })
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)