import { NavLink } from 'react-router-dom'
import "C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from 'react'
import logo from 'C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/src/assets/logo.jpeg'
import "./Nav-bar.css"

function Navbbar() {
  return (
    <>
      <div className="container-fluid bod">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div className="navbar-brand nav-logo" to="/">
                  <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" />
                  <strong className='name'>EVE</strong>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-lg-0 menu">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/calculate">Calculate</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/gynae">Gynae</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about-us">About</NavLink>
                    </li>
                  
                  </ul>
                  

                </div>
              </div>
            </nav>
          </div>
        </div>

      </div>

    </>
  )
}

export default Navbbar