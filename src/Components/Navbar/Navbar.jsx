import React, { Component } from 'react'
import './Navbar.css' 
import logo from 'C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/src/assets/logo.jpeg'
import { NavLink } from 'react-router-dom'
import "C:/Users/acer/OneDrive/Desktop/Web Dev/Reactjs/reactlec/node_modules/bootstrap/dist/css/bootstrap.min.css"

class Navbar extends Component {
  state = {clicked : false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <div className='navbar'>
        <div className="navlogo">
            <img src={logo} alt=""/>
            <p>EVE</p>
        
        </div>
           
        <ul id='menu' className={this.state.clicked ? "#menu active" : "#menu"}> 
           <li> <NavLink to="/" className='text-muted'>Home</NavLink></li>
           <li><NavLink to="/calculate" className='text-muted'>Calculate</NavLink></li>
           <li><NavLink to="/gynae" className='text-muted'>Gynae</NavLink></li>
           <li><NavLink to="/contact-us" className='text-muted'>Contact Us</NavLink></li>
        </ul>

        <div id='mobile' onClick={this.handleClick}>
          <id id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></id>
        </div>

    </div>
  )
}
}

export default Navbar