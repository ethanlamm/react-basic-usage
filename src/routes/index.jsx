import Layout from "../components/Layout";
import UseEffect from "../pages/UseEffect";
import UseReducer from "../pages/UseReducer";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <UseEffect /> },
            { path: 'useReducer', element: <UseReducer /> },
        ]
    }
]

export default routes