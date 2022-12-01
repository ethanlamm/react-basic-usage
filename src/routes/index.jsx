import Layout from "../components/Layout";
import UseEffect from "../pages/UseEffect";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <UseEffect /> }
        ]
    }
]

export default routes