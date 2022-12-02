import React, { useState } from 'react'

function FormEvent() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    const onChangeHandler2: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue2(e.target.value)
    }

    const onChangeHandler3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue3(e.target.value)
    }

    return (
        <div>
            <div>FormEvent</div>
            <div>
                内联处理：<input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
            <div>
                外部处理1: <input type="text" value={value2} onChange={onChangeHandler2} />
            </div>
            <div>
                外部处理2: <input type="text" value={value3} onChange={onChangeHandler3} />
            </div>
        </div>
    )
}

export default FormEvent