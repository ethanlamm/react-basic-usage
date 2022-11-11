import React from 'react'

import useStore from '../store-Mobx'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useRef } from 'react'

function Home() {
    // 默认是空字符串''，不能为null
    const [value, setValue] = useState('')

    // 获取DOM
    const inptRef = useRef(null)
    const spanRef = useRef(null)

    const { home } = useStore()

    const clickHandler = () => {
        home.addCount()
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const getDOM = () => {
        console.log(inptRef.current.value);
        spanRef.current.innerText = `input的value为: ${inptRef.current.value}`
    }


    return (
        <div>
            Home
            <div>count:{home.count}</div>
            <div>double:{home.double}</div>
            <button onClick={clickHandler}>+1</button>
            <hr />
            <div>受控组件: input的状态被React组件的状态控制</div>
            <input type="text" value={value} onChange={onChange} />——
            <span>input的value为:{value}</span> <br /><br />
            <div>非受控组件: 通过手动操作dom的方式获取文本框的值</div>
            <input type="text" ref={inptRef} />——
            <span ref={spanRef}>input的value为:</span> <br />
            <button onClick={getDOM}>手动获取DOM</button>
        </div>
    )
}

export default observer(Home)