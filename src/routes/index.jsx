import Layout from "../components/Layout";
import UseEffect from "../pages/UseEffect";
import UseReducer from "../pages/UseReducer";
import UseContext from "../pages/UseContext";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <UseEffect /> },
            { path: 'useReducer', element: <UseReducer /> },
            { path: 'useContext', element: <UseContext /> },
        ]
    }
]

export default routes