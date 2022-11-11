import React from 'react'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store-Redux/slices/todoSlice'

function Todo() {

    const { list } = useSelector(state => state.todo)

    const dispatch = useDispatch()


    // 受控组件：初始值必须要有，且不能为null，可设置为 空字符串''
    const [todo, setTodo] = useState('')
    const inputHandler = (e) => {
        setTodo(e.target.value)
    }

    // 派发action，添加todo
    const addTodo = () => {
        if (!todo) return alert('请输入内容')
        dispatch(add(todo))
        // 置空
        setTodo('')
    }

    return (
        <div>
            <p>任务列表</p>
            <ul>
                {list.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" defaultChecked={todo.completed} /> {todo.content}
                    </li>
                ))}
            </ul>
            <input type="text" onChange={inputHandler} value={todo} />&nbsp;
            <button onClick={addTodo}>增加一个todo</button>
        </div>
    )
}

export default Todo