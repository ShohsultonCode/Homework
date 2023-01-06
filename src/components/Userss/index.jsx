import React from "react";
import { Link } from "react-router-dom";
const Index = ({info})=>{
    return(
        <li className="list-group-item">
            <Link className="userchalar" to="/">{info.username}</Link>
        </li>
    )
}

export default Index