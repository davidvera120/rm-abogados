import React from 'react'
import { ButtonIntro1, TextIntro, Singupfrm, Form, Label, Input1, InputContainer, Container3, Container4 } from '../../styles/PagIntro'
import {Link} from 'react-router-dom';
import { datosCards } from '../../data/data';
import './cards.css';
import { v4 as uuidv4 } from 'uuid';


export const Cards = () => {


  return (
    <div className="row bg-light">
      
  <div  className="col-12 mt-5 mb-5">
  <h1 className="titleP">Áreas de Práctica</h1>
 
  <p className="textP"> Ofrecemos servicios legales en diversas áreas de práctica,poniendo a su disposición soluciones jurídicas integrales y de valor.
  Nuestro equipo de abogados altamente capacitados está comprometido en proporcionar asesoramiento legal experto y soluciones efectivas para satisfacer las necesidades de nuestros clientes.</p>
 
  <div className="pages-list">
  {
    datosCards.map((item)=>{
      return( 
  
  <div className="container3" key={uuidv4()}>
  <Link  to={`/servicio/${item.id}`}> 
  <img src={item.image} className="img-cover"  alt="cover"/>
<div className="container4">
  <h3 className="titulo-cover">{item.title}</h3>
  </div>
  </Link>
  </div>
 
  )})
}
    </div>
    </div>
    </div>
  )
}

export default Cards
