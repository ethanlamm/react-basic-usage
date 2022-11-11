
// createBrowserRouter：创建路由实例，在方法中定义路由path和组件的对应关系(history 模式)
// createHashRouter：创建路由实例，在方法中定义路由path和组件的对应关系(hash 模式)
import { createBrowserRouter } from "react-router-dom";


// 引入组件
import Layout from "../components/Layout";
import Home from '../pages/Home'
import About from '../pages/About'
import SyntheticEvent from '../pages/SyntheticEvent'
import Error from "../components/Error";

// 路由表
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                children: [
                    { index: true, element: <Home></Home> },
                    { path: 'about', element: <About></About> },
                    { path: 'SyntheticEvent', element: <SyntheticEvent></SyntheticEvent> }
                ],
                errorElement: <Error></Error>,
            },
        ]
    }
])
export default router