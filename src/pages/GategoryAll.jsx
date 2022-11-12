import React from 'react'

import { useGetAllCategoryQuery } from '../store-Redux/apis/category'

function GategoryAll() {
    const { data, isSuccess } = useGetAllCategoryQuery()

    return (
        <div>
            GategoryAll <br />
            <div>method:Get; url: /home/category/head</div>
            {
                isSuccess && data.map(item =>
                    <li key={item.id}>{item.name}</li>
                )
            }
        </div>
    )
}

export default GategoryAll