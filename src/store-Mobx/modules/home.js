import { makeAutoObservable, runInAction } from "mobx"


class HomeStore {
    // 定义数据
    count = 1

    // 计算属性
    get double() {
        return this.count * 2
    }
    constructor() {
        makeAutoObservable(this)
    }

    addCount = () => {
        console.log(this.count);
        runInAction(() => {
            this.count += 1
            console.log(this.count);
        })
    }
}
export default HomeStore