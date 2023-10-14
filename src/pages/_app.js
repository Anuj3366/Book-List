import Navbar from "@/common/Navbar";
import React from 'react'

function App({ Component }) {
    return (
        <>
            <Navbar></Navbar>
            <Component></Component>
        </>
    );
}

export default App;