import React, { Component } from 'react'
function  Navbarco() {
        return(
            <div className="header-top">
    <div className="navbar">
    <input type="checkbox" id="menu-toggle"></input>
      <div className="container">
    <div className="header">
        <label className="hamburger-menu" htmlFor="menu-toggle">
            <span></span>
        </label>
        <a href="#" id="logos" className="logo">
            keikei
        </a>
        <div className="actions">
        <i class="fas fa-search"></i>
        </div>
        <label htmlFor="menu-toggle" className="backdrop"></label>
    </div>
</div>

<nav className="menu">
    <ul>
        <li>
            <a href="#">ÜRÜNLER</a>
        </li>
        <li>
            <a href="#">HAKKIMIZDA</a>
        </li>
        <li>
            <a href="#">VİZYON</a>
        </li>
        <li>
            <a href="#">MİSYON</a>
        </li>
        <li>
            <a href="#">İLETİŞİM</a>
        </li>
    </ul>
</nav>
    </div>
    </div>
        )
}
export default Navbarco