import React from 'react'

interface Props {
    msg: string
    children: React.ReactNode // ✅ best, 最佳接收所有 children 类型
    functionChildren?: (name: string) => React.ReactNode; // ✅ 返回 React 节点
}

function ReactPropsDemo({ msg, children }: Props) {
    return (
        <div style={{ padding: '10px' }}>
            <div>ReactPropsDemo</div>
            <div>msg: {msg}</div>
            <div>{children}</div>
        </div>
    )
}


function ReactProps() {
    return (
        <div>
            <div>ReactProps</div>
            <ReactPropsDemo msg='传入msg'>
                <div>ReactProps传入的节点</div>
            </ReactPropsDemo>
        </div>
    )
}

export default ReactProps