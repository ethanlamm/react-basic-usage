import React, { useEffect, useState } from 'react'

// 1️⃣有具体类型的输入、输出函数——直接指明
function fn1(count: number) {
  return count * 2
}

// 2️⃣无具体类型的输入、输出函数——使用泛型
function fn2<T>(arg: T): T {
  return arg
}

// 3️⃣async函数：返回Promise对象
// Promise是一个泛型函数，T泛型变量用于确定then方法接收的第一个回调函数的参数类型
interface PResponse<T> {
  result: T,
  status: string
}

async function fn3(num: number): Promise<PResponse<number>> {
  return {
    status: 'success',
    result: num
  }
}

function CommonFunction() {
  const [result, setResult] = useState({})
  useEffect(() => {
    fn3(20).then(res => {
      setResult(res)
    })
  }, [])

  return (
    <div>
      <div>CommonFunction</div>
      <div>有具体类型的输入、输出函数: {fn1(3)}</div>
      <div>无具体类型的输入、输出函数: {fn2('string')}</div>
      <div>async函数: {JSON.stringify(result)}</div>
    </div>
  )
}

export default CommonFunction