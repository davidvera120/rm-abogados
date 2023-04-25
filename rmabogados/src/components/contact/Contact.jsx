
import './contact.css';
import React, { useState, useEffect, useRef} from 'react';
import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, Tech, InputContainer, ButtonIntro1, Body, CardInicio, TextArea } from '../../styles/PagIntro'
import { EnergySavingsLeafRounded } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {FiSend} from 'react-icons/fi';
const MySwal = withReactContent(Swal);

export const Contact = () => {
    const form= useRef()

    const enviar = async (e) => {
     e.preventDefault()
     emailjs.sendForm('service_j0kcp5g', 'template_mu9vpym', form.current, 'Dfd6XFz8_KCQ06f0L')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
 
     MySwal.fire({
       title: <strong>Good job!</strong>,
       html: <i>Mensaje Enviado</i>,
       icon: 'success'
     })
 
    e.target.reset();
    };

  return (
   
    
    <div  className="row">
    <div className="contact1">
    <div className="col-12">
   
    <div className="letraC mt-4">
    <h1 className="titleForm2">Cuéntanos tu caso</h1>
      <Form ref={form} onSubmit={enviar}>
      <div className="container">
      <div className="mt-3">
      <h5>Nombre:</h5>
      <input type="text" name="user_name"    placeholder="nombre" required/>
    </div>
      <div className="mt-3">
      <h5>Email:</h5>
      <input type="email" name="user_email" placeholder="youremail@gmail.com" required/>
      </div>
      <div className="mt-3">
      <h5>Telefono:</h5>
      <input type="text" name="user_phone" placeholder="3207654328" required/>
      </div>
      </div>
      <div className="container mt-3 mb-3">
            <h5>Mensage:</h5>
            <textarea  name="message" rows="7" placeholder="mensage" required/>
            </div>
     
     
            
      <button className="buttonSend mt-4" type="submit"><FiSend/> Enviar</button>

     
   
      
      </Form>
      
   </div>
    </div>
    </div>
    </div> 
    
   
  )
}

export default Contact;