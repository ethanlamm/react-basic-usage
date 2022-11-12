// 从特定于 React 的入口点导入 RTK Query 方法
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import baseURL from '../../baseURL';

// 定义我们的单个 API Slice 对象
export const categorySlice = createApi({
    // 缓存减速器预计将添加到 `state.api` （已经默认 - 这是可选的）
    reducerPath: 'category',

    // 设置baseUrl
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    // “endpoints” 代表对该服务器的操作和请求
    endpoints: builder => ({
        // `getAllCategory` endpoint 是一个返回数据的 “Query” 操作
        // 无参数
        getAllCategory: builder.query({
            // 请求的 URL 是 baseUrl + query()返回的url
            query: () => '/home/category/head',

            // transformResponse 处理返回的data字段
            transformResponse: data => {
                return data.result
            }
        }),
        getCategoryById: builder.query({
            // 请求的 URL 是 baseUrl + query()返回的url
            query: (id) => `/category?id=${id}`,

            // transformResponse 处理返回的data字段
            transformResponse: data => {
                return data.result
            },

            // 设置缓存时间，单位：秒；未设置时，默认60秒缓存时间
            keepUnusedDataFor: 10
        }),
    })
})

// 为 `getAllCategory` Query endpoint 导出自动生成的 hooks，作为请求数据的函数
// 名字：use + 函数名(首字母大写) + Query/Mutation(与builder.query、builder.mutation对应)
export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } = categorySlice

// 导出，在store中配置
export default categorySlice