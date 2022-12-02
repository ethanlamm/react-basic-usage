import routes from "./routes"
import { useRoutes } from 'react-router-dom'

function App() {
  // useRoutes 只能在函数式组件中使用
  const router = useRoutes(routes)
  return (
    <div className="App">
      {router}
    </div>
  )
}

export default App
