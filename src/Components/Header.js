import React from 'react'
import houserImg from '../assets/houser_logo.png'

const Header = () => {
    return (
        <div className="Header">
            <img src={houserImg} alt="houser logo"/>
            <h2 className="title">Houser</h2>
        </div>
    )
}

export default Header

