import React, { useState } from 'react'

function UseState() {
    // 1️⃣给定初始化值情况下可以直接使用
    const [value1, setValue1] = useState('string')

    // 2️⃣没有初始值（undefined）或初始 null
    const [value2, setValue2] = useState<null | number>(null)
    const [value3, setValue3] = useState<undefined | string>()

    return (
        <div>
            <div>useState</div>
            <div>value1: {value1}</div>
            <div>value2: {value2}</div>
            <button onClick={() => setValue2(1)}>change-value2</button>
            <div>value3: {value3}</div>
            <button onClick={() => setValue3('null')}>change-value3</button>
        </div>
    )
}

export default UseState