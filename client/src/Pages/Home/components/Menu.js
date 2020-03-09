import React from "react";
import "../../../styles/Menu.css"
import {Link} from "react-router-dom"

function Menu() {
    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link route = "">
                <button className="dropdown-item" type="button">Profile</button>
                </Link>

                <Link route = "">
                <button className="dropdown-item" type="button">Categories</button>
                </Link>

                <Link routte = "">
                <button className="dropdown-item" type="button">Create Flow</button>
                </Link>

            </div>
        </div>
    )
}

export default Menu;