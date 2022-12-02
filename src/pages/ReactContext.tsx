import React, { useContext } from 'react'

import { ThemeContext } from '../context/theme'

function ReactContext() {
    const theme = useContext(ThemeContext)
    // console.log(theme);

    return (
        <div>
            <div>ReactContext</div>
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

export default ReactContext