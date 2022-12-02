import React from 'react'

function EventParameter() {
    // 1️⃣不带event参数
    const clickHandler1 = () => {
        console.log('外层事件触发');
    }

    // 2️⃣带event参数
    // 查找方法：
    // 1）按住ctrl，点击onClick，得到 "onClick ?: MouseEventHandler <T> | undefined"
    // 2）按住ctrl，点击MouseEventHandler，得到 "type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>"
    // 3）按住ctrl，点击Element，得到 
    // "interface HTMLElement extends Element { }
    // interface HTMLAnchorElement extends HTMLElement { }
    // ...
    // interface HTMLButtonElement extends HTMLElement { }
    // ...
    // "
    // 4）找到对应HTML元素类型(HTMLButtonElement)，填入即可
    const clickHandler2: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        console.log('内层事件触发')
    }
    return (
        <div>
            <div>EventParameter</div>
            <div style={{ padding: '10px', width: '200px', height: '150px', backgroundColor: 'pink' }}
                onClick={clickHandler1}>
                <button onClick={clickHandler2}>click</button>
            </div>
        </div>
    )
}

export default EventParameter