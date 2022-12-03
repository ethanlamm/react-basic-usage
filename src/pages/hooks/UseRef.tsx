import React, { useEffect, useRef } from 'react'

function UseRef() {
    // 1️⃣推荐
    const inputRef1 = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        // inputRef1可能为null，为null则没有current属性，会报错，需要判断
        // if (inputRef1 && inputRef1.current) {
        //     inputRef1.current.focus();
        // }
        // ✅ best
        inputRef1.current?.focus()
    }, [])


    // 2️⃣不推荐使用 ! , 存在隐患，Eslint 默认禁掉
    const inputRef2 = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        // 非null断言 null!。断言之后的表达式非 null、undefined
        // inputRef2.current.focus()
    }, [])

    return (
        <div>
            <div>useRef</div>
            <input type="text" ref={inputRef1} />&nbsp;
            <button onClick={() => { inputRef1.current?.focus() }}>focus1</button><br />
            <input type="text" ref={inputRef2} />&nbsp;
            <button onClick={() => { inputRef2.current.focus() }}>focus2</button>
        </div>
    )
}

export default UseRef