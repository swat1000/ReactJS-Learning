import React from "react";
import './header.css';
import { useState } from "react";
import Title from "./Title";

export default function Header() {

  // function handleClick() {
  //   setName('Chaurasia')
  //   setshowtitlepage(false)
  // }

  return (
    <div>
      {/* This is header : Welcome to react
      <div>
        your name is : {name}
        <button onClick={handleClick}>Change Name</button>
      </div>
      This is title page: {showtitlepage ? <Title /> : null} */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Swatantra</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
          <form className="d-flex justify-content-center align-items-center" role="search" id="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};
