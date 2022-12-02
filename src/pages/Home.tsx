import React from 'react'
import Welcome from '../components/Welcome'

function Home() {
    return (
        <div>
            <div>Home</div>
            <Welcome name='TypeScript' enthusiasmLevel={5} />
        </div>
    )
}

export default Home