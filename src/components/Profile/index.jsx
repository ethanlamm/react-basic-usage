import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addSalary } from '../../store/slices/profile'
import { addCount } from '../../store/slices/count'

function Profile() {
    const { name, salary } = useSelector(state => state.profile)
    const { count } = useSelector(state => state.count)
    const dispatch = useDispatch()
    const clickHandler1 = () => {
        dispatch(addSalary())
    }
    const clickHandler2 = () => {
        dispatch(addCount())
    }
    return (
        <div>
            <div>Profile</div>
            <div>未持久存储——刷新丢失</div>
            <div>count: {count}</div>
            <button onClick={clickHandler2}>+</button>
            <hr />
            <div>持久存储——刷新不丢失</div>
            <div>name: {name}</div>
            <div>salary: {salary}</div>
            <button onClick={clickHandler1}>+</button>
        </div>
    )
}

export default Profile