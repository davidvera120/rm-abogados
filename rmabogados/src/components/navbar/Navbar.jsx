import React, { useState, useEffect} from 'react';
import logorm from '../../images/logorm.png';
import {FiChevronDown} from "react-icons/fi";
import './navbar.css';
import {Link} from 'react-router-dom';
import { datosCards } from '../../data/data';
import { v4 as uuidv4 } from 'uuid';
import ContactModal from '../modals/ContactModal';
export const Navbar = () => {

  const [info, setInfo]=useState([]);

  // const filtro = async () => { 
  // const name = datosCards.map((item) => item.title);
  // setInfo(name);
  // }

  // useEffect(() => {
  //   filtro()
  // },[]);

  return (
    <nav className="navbar  navbar-expand-lg navrm fixed-top">
    <div className="container-fluid">
     <img src={logorm} alt="img"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
       
      <ul className="navbar-nav  ms-auto mb-lg-0 me-5">
      <li className="nav-item">
      <Link to="/" className="nav-link">Inicio</Link>
        </li>
      <li className="nav-item">
      <Link to="/lafirma"  className="nav-link">Quienes Somos</Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Areas de Practica
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {
           datosCards.map((item)=>{
               return( 
            <li className="drop-item"  key={uuidv4()}><Link className="nav-link" to={`/servicio/${item.id}`}>{item.title}</Link></li>
            )})
          }
          </ul>
        </li>
        <li className="nav-item">
       
        <ContactModal/>
        
        </li>    
        </ul>
        
          </div> 
         
      
    </div>
   
  </nav>
  )
}

export default Navbar