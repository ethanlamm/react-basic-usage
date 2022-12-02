import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import ReactFC from "../pages/builtInFunctions/ReactFC";
import ReactComponent from "../pages/builtInFunctions/ReactComponent";
import ReactReducer from "../pages/builtInFunctions/ReactReducer";
import ReactContext from "../pages/builtInFunctions/ReactContext";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'ReactFC', element: <ReactFC /> },
            { path: 'ReactComponent', element: <ReactComponent /> },
            { path: 'ReactReducer', element: <ReactReducer /> },
            { path: 'ReactContext', element: <ReactContext /> },
        ]
    }
]

export default routes