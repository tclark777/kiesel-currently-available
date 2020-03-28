import React from 'react'
import logo from '../assets/images/logo-cg.png'

function Header() {
  return (
    <div className="d-inline-flex header pt-5 pb-4 w-100">
      <a href="https://www.kieselguitars.com/" className="pl-5 mr-auto">
        <img src={logo} height="40" />
      </a>
      <p className="pr-5 ml-auto"><span className="font-weight-bold">(Unofficial)</span> Currently Available Kiesel Guitars List</p>
    </div>
  )
}

export default Header