import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>home——props</Link>
                    </li>
                    <li>
                        <Link to={`/profile`}>profile——Redux-Persist</Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout