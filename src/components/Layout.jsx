import { Outlet, Link } from 'react-router-dom'
function Layout() {
    return (
        <>
            <div>
                <h3>Layout</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>home——Mobx</Link>
                        </li>
                        <li>
                            <Link to={`/about`}>about——Mobx</Link>
                        </li>
                        <li>
                            <Link to={`/profile`}>profile——Redux</Link>
                        </li>
                        <li>
                            <Link to={`/todo`}>todo——Redux</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet></Outlet>
        </>

    )
}
export default Layout