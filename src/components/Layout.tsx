import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='ReactFC'>React.FC&lt;P&gt;</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout