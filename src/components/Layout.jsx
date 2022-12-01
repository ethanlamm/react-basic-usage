import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>

            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout