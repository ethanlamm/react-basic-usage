import { useRoutes } from 'react-router-dom'
import routes from "./routes"

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <div>App</div>
      {element}
    </div>
  )
}

export default App
