import React from 'react'

import GrandSon from './GrandSon'

function Son({ children }) {
    return (
        <div>
            <div>Son</div>
            {children}——二次转手
            <GrandSon></GrandSon>
            <GrandSon></GrandSon>
        </div>
    )
}

export default Son