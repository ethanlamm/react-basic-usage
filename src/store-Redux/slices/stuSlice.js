// 使用RTK构建store

import { createSlice } from '@reduxjs/toolkit'
// createSlice(options:Object) 创建reducer的切片（整个reducer的某一部分）
// options 配置项
// name —— reducer的名字，会作为action中type属性的前缀，不要重复
// initialState —— state的初始值
// reducers —— reducer的具体方法，一个对象

const stuSlice = createSlice({
    name: 'stu',
    initialState: {
        name: 'ethan',
        age: 24
    },
    reducers: {
        // 直接写方法
        // 参数1：state，参数2：action
        setName(state, action) {
            // 直接修改
            state.name += '!'
        },
        setAge(state, action) {
            // 直接修改(可传参数)
            state.age += action.payload
        }
    }
})
// 使用createSlice创建切片后，切片会自动根据配置对象生成 actions 和 reducer
// console.log(stuSlice);
// console.log(stuSlice.actions);
// console.log(stuSlice.reducer);

// 导出action创建器，生成action后，给调用使用
export const { setName, setAge } = stuSlice.actions
// setName, setAge是 actions 创建器，调用该函数，返回action对象
// const setNameObj = setName()
// const setAgeObj = setAge()
// console.log(setNameObj);
// console.log(setAgeObj);
// action 对象的结构 { type: '该reducer切片的name/函数名', payload:调用action创建器时的参数 }

// 导出reducer，需要用于创建store(configureStore)
export default stuSlice