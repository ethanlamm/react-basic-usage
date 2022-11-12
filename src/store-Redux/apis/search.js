// 从特定于 React 的入口点导入 RTK Query 方法
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import baseURL from '../../baseURL';

// 定义我们的单个 API Slice 对象
export const searchSlice = createApi({
    // 缓存减速器预计将添加到 `state.api` （已经默认 - 这是可选的）
    reducerPath: 'search',

    // 设置baseUrl
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    // “endpoints” 代表对该服务器的操作和请求
    endpoints: builder => ({
        // builder.query 代表查询，即get请求
        // builder.mutation 代表修改，表示post、put、delete等其他请求
        searchProd: builder.mutation({
            query: ({ page, keyword }) => ({
                url: '/search/all',
                method: 'post',
                body: {
                    page,
                    keyword,
                    pageSize: 10
                }
            }),

            // transformResponse 处理返回的data字段
            transformResponse: data => {
                return data.result
            }
        }),
    })
})

// 为 `getAllCategory` Query endpoint 导出自动生成的 hooks，作为请求数据的函数
// 名字：use + 函数名(首字母大写) + Query/Mutation(与builder.query、builder.mutation对应)
export const { useSearchProdMutation } = searchSlice

// 导出，在store中配置
export default searchSlice