import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
// 包裹最外层
import { BrowserRouter } from "react-router-dom";

import ThemeContextProvider from './context/theme'

// document.getElementById('root')返回类型是 HTMLElement | null
// 1️⃣类型断言：document.getElementById('root') as HTMLElement
// 2️⃣非空(!)：放在一个表达式后，表示前面的表达式返回的值的类型不包含 null 和 undefined。document.getElementById('root')!
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
)
