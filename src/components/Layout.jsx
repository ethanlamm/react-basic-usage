import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>
                <ul>
                    <li> <Link to={'/'}>useEffect</Link></li>
                    <li> <Link to={'useReducer'}>useReducer</Link></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout