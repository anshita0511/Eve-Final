import React, { useState } from 'react'
import Data from './Data'
import Card from '../Card'
import Button from '../Button'
import "./Gynae.css"

function Gynae() {
  const [item, setItems] = useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat)
    setItems(newItems)
  }

  // button click
  const [buttonText, setButtonText] = useState('Book Appointment');

  const handleClick = () => {
    setButtonText('Booked!');

    setTimeout(() => {
      setButtonText('Book Appointment');
    }, 2000);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className='text-center col-12 mt-4 mb-4' style={{ color: "#2e294eff" }}>
            <h1>Find a gynae in your city 
            <i className="fa-solid fa-user-doctor mx-3"></i>
            </h1>

            <button type="button" class="text-white p-2 px-2 mx-5 mt-2 btn fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#835779" }}>
              Online Gynae
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Dr Sonali Agrawal</h5>
                  </div>
                 
                  <div className="modal-body">
                            <div className="gynae-img">
                                <img src="./sonalig.jpg" alt=""/>
                            </div>
                            <div className="gynae-info">
                                <h2>Consult an Specialist</h2>
                                <p>Dr Sonali Agrawal has a long experience of Gynecologic laparoscopic surgeries (like Total Laparoscopic hysterectomies), which she been doing since 2009. She has taken advanced training in field of infertility (IVF) and has been successfully running IVF Centre.</p>
                                
                            </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="text-white p-2 px-2 mx-5 btn fw-bold" style={{ backgroundColor: "#835779" }} onClick={handleClick}>{buttonText}</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Button menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
          <Card item={item} />
        </div>

      </div>
    </>
  )
}

export default Gynae