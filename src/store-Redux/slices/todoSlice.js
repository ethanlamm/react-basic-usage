import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // 对象写法
        add: {
            reducer(state, action) {
                // console.log(action.payload);
                const { id, content } = action.payload
                state.list.push({ id, content, completed: false })
            },
            // 预处理函数：处理action的payload字段，必须返回一个包含payload的对象，其他:meta、error...
            prepare(data) {
                // console.log(data);
                // data:为调用action 创建器时传入的参数
                return {
                    payload: {
                        // RTK还提供了一个nanoid方法，用于生成一个固定长度的随机字符串，类似uuid功能
                        id: nanoid(),
                        content: data
                    }
                }
            }
        }
    }
});

export const { add } = todoSlice.actions

export default todoSlice.reducer