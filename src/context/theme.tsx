import React, { createContext, useState } from 'react'

interface defaultValue {
    type: string
    foreground: string
    background: string
    toggleTheme?: () => void
}

interface Props {
    children: React.ReactNode
}

const themesInit = {
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

// React.Context<T>
export const ThemeContext: React.Context<defaultValue> = createContext(
    themesInit.light  // 默认值
);


function ThemeContextProvider({ children }: Props) {
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