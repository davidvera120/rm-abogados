import React from 'react'
import {MdOutlineSecurity} from 'react-icons/md';
import {FaHandHoldingUsd, FaHandshake} from 'react-icons/fa';
import {GoLaw} from "react-icons/go";
import {BsFillBriefcaseFill} from 'react-icons/bs';
import './info.css';

export const Info = () => {
  return (
    <div className="row bg-light">
    <div className="col-12 infoBack">
    

    <div className="cardsInfo">
    <div>
    <MdOutlineSecurity className="icons"/>
    <h6>Seguridad Legal</h6> 
    </div>
    </div>

    <div className="cardsInfo borderInfo">
    <div>
    <FaHandshake className="icons"/>
    <h6>Acompañamiento Continuo</h6>
    </div>
    </div>

    <div className="cardsInfo borderInfo">
    <div>
    <FaHandHoldingUsd className="icons"/>
    <h6>Ahorra Dinero</h6>
    </div>
    </div>


    <div className="cardsInfo borderInfo">
    <div>
    <GoLaw className="icons"/>
    <h6>Capacitación Continua</h6>
    </div>
    </div>


    <div className="cardsInfo borderInfo">
    <div>
    <BsFillBriefcaseFill className="icons"/>
    <h6>Abogados Especializados</h6>
    </div>
    </div>

   
    </div>
  </div>
  )
}

export default Info