// 引入组件
import Layout from "../components/Layout";
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Todo from '../pages/Todo'
import GategoryAll from '../pages/GategoryAll'
import GategoryById from '../pages/GategoryById'
import SearchProd from '../pages/SearchProd'
import Error from "../components/Error";

const routes = [
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                children: [
                    { index: true, element: <Home></Home> },
                    { path: 'about', element: <About></About> },
                    { path: 'profile', element: <Profile></Profile> },
                    { path: 'todo', element: <Todo></Todo> },
                    { path: 'categoryAll', element: <GategoryAll></GategoryAll> },
                    { path: 'categoryById', element: <GategoryById></GategoryById> },
                    { path: 'searchProd', element: <SearchProd></SearchProd> },
                ],
                errorElement: <Error></Error>,
            },
        ]
    }
]

export default routes