import React from "react"
import { Link } from "react-router-dom"
function Home(){
    return (
        <div>
            <h1>Homw</h1>
            <Link to="/registry">Clkc here to go to registry</Link>
        </div>
    )
}
export default Home;