import React, { useContext } from 'react'

// Context:避免层层传递props属性，Context提供了一种在组件树中共享此类值的方法
import { ThemeContext } from '../context/theme'

function UseContext() {
    const theme = useContext(ThemeContext)
    // console.log(theme);  // 此时theme为Provider中value传入的值，theme.dark

    return (
        <div>
            <h4>UseContext</h4>
            <div>type: {theme.type}</div>
            <div>background: <input type="color" value={theme.background} readOnly /></div>
            <div>foreground: <input type="color" value={theme.foreground} readOnly /></div><br />
            <div style={{
                width: '100%', height: '200px', textAlign: 'center', lineHeight: '200px',
                backgroundColor: theme.background,
                color: theme.foreground
            }} >
                将此处代码放在App组件中使用, 即可达到控制整个应用的light/dark模式
            </div>
            <button onClick={theme.toggleTheme}>Toggle</button>
        </div>
    )
}

export default UseContext