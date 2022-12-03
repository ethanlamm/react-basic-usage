import React, { useEffect } from 'react'

type EffectCallback = () => (void | (() => void | undefined))
/**
 * useEffect(effect: EffectCallback, deps?: DependencyList)
 *      effect：是一个函数，无参数，无返回值或者返回一个清理函数
 *                该清理函数无参数、无返回值
 *      deps：依赖项，无、空数组、数组
 */


function UseEffect() {
    // ✅正确的
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('5秒后输出')
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    })

    // async函数返回Promise：()=>Promise<T>，所以effect函数不能是async函数
    // ❌错误的
    // useEffect(async () => {
    //    const {data}=await ajax(prams) 
    // },[prams])

    // ✅正确的处理
    // useEffect(() => {
    //     (async () => {
    //         const { data } = await ajax(params);
    //         // todo
    //     })();
    // }, [params]);

    return (
        <div>useEffect</div>
    )
}

export default UseEffect