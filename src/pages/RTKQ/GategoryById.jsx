import React, { useState } from 'react'

import { useGetCategoryByIdQuery } from '../../store-Redux/apis/category'

function GategoryById() {
    const [id, setId] = useState('1011000')
    // data会根据id的不同而改变，不用useEffect侦听
    // 但使用的是缓存数据，不会再发请求！
    // 传入参数！！
    const { data, isSuccess } = useGetCategoryByIdQuery(id)

    const clickHandler = (id) => {
        setId(id)
    }
    return (
        <div>
            GategoryById <br />
            <span>method: Get; url: /category?id=</span>&nbsp;
            <button onClick={() => clickHandler('1011000')}>1011000</button>&nbsp;
            <button onClick={() => clickHandler('1010000')}>1010000</button>&nbsp;
            <button onClick={() => clickHandler('1005002')}>1005002</button>&nbsp;
            <div>数据结果</div>
            <div>此时的id:{id}</div>
            <ul>
                {
                    isSuccess && data.children.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
            <div>注意数据会随id而改变, 使用缓存数据(不需要useEffect侦听)，但不再发请求</div>
        </div>
    )
}

export default GategoryById