import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div>Layout</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='ReactFC'>React.FC&lt;P&gt;</Link></li>
                    <li><Link to='ReactComponent'>React.Component&lt;P,S&gt;</Link></li>
                    <li><Link to='ReactReducer'>React.Reducer&lt;S,A&gt;</Link></li>
                    <li><Link to='ReactContext'>React.Context&lt;T&gt;</Link></li>
                    <li><Link to='EventParameter'>EventParameter</Link></li>
                    <li><Link to='FormEvent'>FormEvent</Link></li>
                    <li><Link to='CommonFunction'>CommonFunction</Link></li>
                    <li><Link to='ReactProps'>ReactProps</Link></li>
                    <li><Link to='UseState'>useState</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout