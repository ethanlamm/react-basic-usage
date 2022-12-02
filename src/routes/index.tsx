import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import ReactFC from "../pages/ReactFC";
import ReactComponent from "../pages/ReactComponent";



const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'ReactFC', element: <ReactFC /> },
            { path: 'ReactComponent', element: <ReactComponent /> },
        ]
    }
]

export default routes