import React, { useState } from "react";
import "./app.css"
import Menu from "./menuApi"
import Menucard from "./MenuCard";

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu)
    // console.log(menuData)

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        });
        setMenuData(updatedList)
    }

    return (
        <div>

            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")} >Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}  >Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}  >Evening</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}  >Dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}  >ALL</button>
                </div>
            </nav>

            <Menucard menuData={menuData} />
        </div>
    )
}

export default Resturant