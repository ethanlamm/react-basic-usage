// https://react.docschina.org/docs/context.html

import { createContext, useState } from 'react'

export const themesInit = {
    light: {
        type: 'light',
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        type: 'dark',
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = createContext(
    themesInit.light // 默认值
);

// 公式：const MyContext = React.createContext(defaultValue);

// 1️⃣defaultVlue的注意事项：
// 只有当组件所处的组件树中没有匹配到Provider时，其defaultValue参数才会生效
// 注意：即使将undefined传递给Provider的value，defaultValue仍不会生效！


function ThemeContextProvider({ children }) {
    // 2️⃣context 会根据引用标识来决定何时进行渲染（本质上是 value 属性值的浅比较）
    // 为防止每一次Provider重渲染时，value总是被赋值为新的值，将value状态提升到父组件的state中
    const [themes, setThemes] = useState(themesInit.dark)

    const toggleTheme = () => {
        setThemes(pre => (
            pre.type === 'light' ? themesInit.dark : themesInit.light
        ))
    }
    return (
        <ThemeContext.Provider value={{ ...themes, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
