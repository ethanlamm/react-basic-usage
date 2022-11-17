import Layout from "../components/Layout";
import Home from "../components/Home/Father";
import Profile from "../components/Profile";

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