import React from 'react'

// useSelector 从 store 中获取数据
// useDispatch 派发 actions
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge } from '../../store-Redux/slices/stuSlice'

function Profile() {
    // 通过useSelector获取store中的数据
    const profile = useSelector(state => state.student)
    const { name, age } = profile

    // 通过useDispatch获取派发器对象
    const dispatch = useDispatch()

    const setNameHandler = () => {
        dispatch(setName())
    }
    const setAgeHandler = () => {
        // 参数 action.payload
        dispatch(setAge(1))
    }

    return (
        <div>
            Profile
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>
                <button onClick={setNameHandler}>修改name</button>
                <button onClick={setAgeHandler}>修改age</button>
            </div>
        </div>
    )
}

export default Profile