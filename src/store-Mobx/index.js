import React from 'react'

import HomeStore from './modules/home'
import AboutStore from './modules/about'


class RootStore {
    constructor() {
        this.home = new HomeStore()
        this.about = new AboutStore()
    }
}

// 统一管理
const rootstore = new RootStore()
const context = React.createContext(rootstore)
const useStore = () => React.useContext(context)
//导出该函数
export default useStore