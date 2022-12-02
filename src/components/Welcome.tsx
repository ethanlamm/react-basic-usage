import React from 'react'

// Props类型
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

// enthusiasmLevel = 1 需要给一个默认值
// enthusiasmLevel为可选参数，其类型为 number | undefined
function Welcome({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div>
            Welcome {name} {getExclamationMarks(enthusiasmLevel)}
        </div>
    )
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Welcome