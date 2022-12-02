import React from 'react'

// React.Component<P,S> 是定义class组件的一个泛型
// 第一个参数是props、第二个参数是state

// Props接口
interface Props {
    propsArg: string
}

// State接口
interface State {
    stateArg: string
}

class ReactComponentDemo extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            stateArg: 'stateArg'
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <div>props: {this.props.propsArg}</div>
                <div>state: {this.state.stateArg}</div>
            </div>
        )
    }
}


function ReactComponent() {
    return (
        <div>
            <div>ReactComponent</div>
            <ReactComponentDemo propsArg='propsArg' />
        </div>
    )
}

export default ReactComponent