import type { RouteObject } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import ReactFC from "../pages/builtInFunctions/ReactFC";
import ReactComponent from "../pages/builtInFunctions/ReactComponent";
import ReactReducer from "../pages/builtInFunctions/ReactReducer";
import ReactContext from "../pages/builtInFunctions/ReactContext";
import EventParameter from "../pages/eventHandlerFunctions/EventParameter";
import FormEvent from "../pages/eventHandlerFunctions/FormEvent";
import CommonFunction from "../pages/eventHandlerFunctions/CommonFunction";
import ReactProps from "../pages/ReactProps";

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
            { path: 'EventParameter', element: <EventParameter /> },
            { path: 'FormEvent', element: <FormEvent /> },
            { path: 'CommonFunction', element: <CommonFunction /> },
            { path: 'ReactProps', element: <ReactProps /> },
        ]
    }
]

export default routes