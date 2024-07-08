import React from 'react'
import Data from "./Pages/Data"

function Button({ menuItems, filterItems, setItems }) {
    return (
        <div className='d-flex justify-content-center mb-2'>
            <div className="d-grid gap-2 d-md-block justify-items-stretch">
            {
                menuItems.map(val => (
                        <button className='text-white p-1 px-2 mx-5 btn fw-bold' style={{ backgroundColor: "#2e294eff" }} onClick={() => filterItems(val)}>
                            {val}
                        </button>
                    

                ))
            }
            <button className='text-white p-1 px-2 mx-5 btn fw-bold' style={{ backgroundColor: "#2e294eff" }} onClick={() => setItems(Data)}>
                All
            </button>

            </div>
        </div>
    )
}

export default Button