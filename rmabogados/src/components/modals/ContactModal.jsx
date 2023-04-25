
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import React, { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonIntro, ImgIntro, TextIntro, Singupfrm, Form, Label, Input1, Tech, InputContainer, ButtonIntro1, Body, CardInicio, TextArea } from '../../styles/PagIntro'
import { EnergySavingsLeafRounded } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import {FiSend} from 'react-icons/fi';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './modals.css';
import logorm from '../../images/logorm.png';
const MySwal = withReactContent(Swal);


const ContactModal = () => {

    const [abierto, setabierto]= useState(false)

    const funcionModal = (valor) => {
     
     setabierto(valor)
     }
   const navigate = useNavigate();
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

e.target.reset()
setabierto(false)

   };

  return (
    <div>
    <button   className="buttons nav-link"  onClick={()=>{funcionModal(true)}}>Contacto</button>
   
    <Modal isOpen={abierto}>

    <ModalHeader>
    <div className="d-flex">
    <button onClick={()=>{funcionModal(false)}} className="buttons"><IoIosCloseCircleOutline size={22}/></button>
    
    </div>
    </ModalHeader>
    
         <ModalBody>
         <h1 className="titleModal">Cuéntanos tu caso</h1>
         <Form ref={form} onSubmit={enviar}>
         <div className="container">
         <div className="">
         <h5 className="titleForm">Nombre:</h5>
         <input type="text" name="user_name"    placeholder="nombre" required/>
       </div>
         <div className="mt-3">
         <h5 className="titleForm">Email:</h5>
         <input type="email" name="user_email" placeholder="youremail@gmail.com" required/>
         </div>
         <div className="mt-3">
         <h5 className="titleForm">Telefono:</h5>
         <input type="text" name="user_phone" placeholder="3207654328" required/>
         </div>
         </div>
         <div className="container mt-3 mb-3">
               <h5 className="titleForm">Mensage:</h5>
               <textarea  name="message" rows="7" placeholder="mensage" required/>
               </div>
        
        
               <div className="send mt-3 mb-3"> 
         <button className="buttonSend" type="submit"><FiSend/> Enviar</button>
       </div>
        
      
         
         </Form>
         </ModalBody>
         
    <ModalFooter>
      
    <img className="titleModal" src={logorm} alt="img"/>

   </ModalFooter>
         
    </Modal> 
    </div>
  )
}

export default ContactModal