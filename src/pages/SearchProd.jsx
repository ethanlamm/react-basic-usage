import React, { useState } from 'react'

import { useSearchProdMutation } from '../store-Redux/apis/search'

function SearchProd() {
    const [page, setPage] = useState(1)
    const [keyword, setKeyword] = useState('')
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    const [searchProd, result] = useSearchProdMutation()

    // Mutation hooks 返回一个数组，包含两个值
    // 数组的第一个值是一个触发函数，传入参数后向服务器发起请求，可使用async/await
    // 数组的第二个值是一个对象，包含有关当前正在进行的请求（如果有）的元数据
    const onChange = (e) => {
        setKeyword(e.target.value)
    }
    const search = async () => {
        // 触发请求的函数
        const { data } = await searchProd({ page, keyword })
        // 新旧数据合并
        setList(pre => {
            return [...pre, ...data.pageData.items]
        })
        setCount(data.pageData.counts)
    }
    return (
        <div>
            <div>SearchProd</div>
            <div>method: Post; url: /search/all</div>
            <div>body:</div>
            <span>page:</span>&nbsp;
            <button onClick={() => setPage(pre => pre + 1)}>{page}</button>——点击可增加页数<br />
            <div>pageSize: 10</div>
            <span>keyword:</span>&nbsp;
            <input type="text" value={keyword} onChange={onChange} placeholder="不填写则查询全部" />&nbsp;
            <button onClick={search}>搜索</button>
            <div>数据总条数: {count}</div>
            <ul>
                {
                    list.length != 0 && list.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default SearchProd