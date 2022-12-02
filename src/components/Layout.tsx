import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout