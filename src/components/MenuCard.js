import React from "react";


const Menucard = ({ menuData }) => {
    return (<>
        <div className="main-card--cointainer">

            {menuData.map((curElement) => {
                return (
                    <>
                        <div className="card-container" key={curElement.id} >
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{curElement.id}</span>
                                    <span className="card-author subtle">{curElement.name}</span>
                                    <h2 className="card-title">{curElement.name}</h2>
                                    <span className="card-description subtle"> {curElement.description} </span>
                                    <div className="card-read">read</div>
                                </div>
                                <img src={curElement.image} alt="im" className="card-media" />
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>



    </>)
}

export default Menucard