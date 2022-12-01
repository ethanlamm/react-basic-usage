import Layout from "../components/Layout";
import UseEffect from "../pages/UseEffect";
import UseReducer from "../pages/UseReducer";
import UseContext from "../pages/UseContext";
import ReactMemo from "../pages/ReactMemo";
import UseCallback from "../pages/UseCallback";


const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <UseEffect /> },
            { path: 'useReducer', element: <UseReducer /> },
            { path: 'useContext', element: <UseContext /> },
            { path: 'reactMemo', element: <ReactMemo /> },
            { path: 'useCallback', element: <UseCallback /> },
        ]
    }
]

export default routes