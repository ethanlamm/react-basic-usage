import axios from "axios"
import { makeAutoObservable, runInAction } from "mobx"

import baseURL from "../../baseURL"


class AboutStore {
    // 定义数据
    categoryList = []

    constructor() {
        makeAutoObservable(this)
    }

    getAllCategory = async () => {
        const { data } = await axios.get(`${baseURL}/home/category/head`)
        // 使用this获取整个store实例
        runInAction(() => {
            this.categoryList = data.result
        })
    }
}
export default AboutStore