import Layout from "../components/Layout";
import Home from "../pages/Home/Father";
import Profile from "../pages/Profile";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'profile', element: <Profile /> }
        ]
    }
]

export default routes