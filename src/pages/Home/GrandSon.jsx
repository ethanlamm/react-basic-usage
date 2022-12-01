import React from 'react'

function GrandSon({ children }) {
    return (
        <div style={{ padding: '10px' }}>
            <div>GrandSon</div>
            {children}
        </div>
    )
}

export default GrandSon