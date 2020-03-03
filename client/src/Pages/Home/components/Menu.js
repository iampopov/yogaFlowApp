import React from "react";
import "../../../styles/Menu.css"

function Menu() {
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Favorites</button>
                <button class="dropdown-item" type="button">Anothe</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
        </div>
    )
}

export default Menu;