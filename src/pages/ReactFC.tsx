import React from 'react'

// React.FC <> 是函数式组件在TypeScript使用的一个泛型，FC就是FunctionComponent的缩写，事实上React.FC可以写成React.FunctionComponent。

interface Props {
    name: string
}

const ReactFCDemo: React.FC<Props> = ({ name }) => {
    return (
        <span style={{ color: 'blue' }}>{name}</span>
    )
}


function ReactFC() {
    return (
        <div>
            <div>React.FC&lt;P&gt;</div>
            <div>Hello <ReactFCDemo name='React.FC<P>' /></div>
        </div>
    )
}

// 泛型
// function fn<Type>(value: Type): Type { return value }
// 1️⃣语法：在函数名称的后面添加<Type>（尖括号），尖括号中添加类型变量
// 2️⃣类型变量 Type，是一种特殊类型的变量，它处理类型而不是值。
// 3️⃣该类型变量相当于一个类型容器，能够捕获用户提供的类型（具体是什么类型由用户调用该函数时指定）
// 4️⃣因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型。
// 5️⃣类型变量 Type，可以是任意合法的变量名称

export default ReactFC