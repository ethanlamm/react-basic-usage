// import router from './router/index-1.js'
import routes from './router/index-1'

// import { RouterProvider } from 'react-router-dom'
// RouterProvider：作为一个组件渲染，并传入由 createBrowserRouter 创建的路由实例给 router 属性

import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <h3>App</h3>
      {/* <RouterProvider router={router} /> */}
      {element}
    </div>
  );
}

// 路由的两种写法
// 1. < BrowserRouter ></BrowserRouter > 包裹最外层 + useRoutes(路由表)
// 2.router = createBrowserRouter(路由表) + <RouterProvider router={router} />

export default App;
