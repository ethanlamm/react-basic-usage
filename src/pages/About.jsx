import React, { useEffect } from 'react'

import useStore from '../store-Mobx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    const { about } = useStore()

    useEffect(() => {
        about.getAllCategory()
    }, [about])

    // 编程式导航
    const goHome = () => {
        navigate('/')
    }

    return (
        <div>
            About
            <div style={{ color: 'blue', cursor: 'pointer' }} onClick={goHome}>&lt;——back to home</div>
            <ul>
                {
                    about.categoryList?.length && about.categoryList.map(item =>
                        <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default observer(About)