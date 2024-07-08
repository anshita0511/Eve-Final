import React from 'react'
import './card.css'

function Card({ item }) {
    return (
        <div className='container'>
            <div className='row g-0 justify-content-center'>
                {item.map((val) => (

                    <div key={val.id} className="wrapper">
                        <div className="user-card">
                            <div className="user-card-img">
                                <img src={val.img} alt=""/>
                            </div>
                            <div className="user-card-info" style={{color : "#2e294eff"}}>
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                                <i className="fa-solid fa-phone" style={{margin: "10px"}}></i>
                                {val.id}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Card
/*

<div key={val.id} className='col-md-8 col-sm-6 card my-3 border-1'>
                        <div className='d-flex'>

                            <div className='card-img-top'>
                                <img src={val.img} alt='' className='img-fluid'/>

                            </div>
                            <div className='card-body my-3'>
                                <div className='card-title fw-bold fs-4'>
                                    {val.title}
                                </div>
                                <div className='card-text'>
                                    {val.desc}
                                </div>
                            </div>

                        </div>


*/