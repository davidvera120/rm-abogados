import React from 'react';
import "./footer.css";
import logorm from '../../images/logorm.png';
import {SiGooglemaps} from 'react-icons/si';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {MdAccessTimeFilled, MdEmail} from "react-icons/md";

export const Footer = () => {
  const date= new Date();
  const year=date.getFullYear();

  return (
    <div className="row">
    <footer>
    <nav className="col-12">
    <div className="cardsF mb-5 mt-3">

    <div className="cardsFooter mt-3">
    <img src={logorm} className="imgFooter" alt="img"/>
    <h6>&copy;{year} All Rights Reserved</h6>
    </div>

    <div className="cardsFooterCenter mt-3">
    <div className="infoFooter2 mb-1">
    <MdAccessTimeFilled size={22} className="colorFont"/>
    <span className="horario">Lunes a Viernes 7:00 am a 12:00 pm – 2:00 pm a 5:00 pm</span>
    </div>
    <div className="infoFooter mb-1">
    <MdEmail size={20}/>
    <span className="horario">abogadosrm19@gmail.com</span>
    </div>
    <div className="infoFooter">
    <FaPhoneSquareAlt size={19}/>
    <span className="horario">+57 3204466048</span>
    </div>
    </div>

    <div className="cardsFooterCenter mt-3">
    <div className="infoFooter">
    <h6>Tuluá – Valle</h6>
    </div>
    <div className="infoFooter">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.68713542363!2d-76.19835932469353!3d4.083975546694557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c5c67f86aaab%3A0x7bd24002ea141afe!2sRM%20ABOGADOS!5e0!3m2!1ses!2sco!4v1682286316096!5m2!1ses!2sco" className="maps" loading="lazy"/>
    <span className="horario">Carrera 27 #27-27 - Segundo piso – Oficina 201</span>
    </div>
    <div className="infoFooter mt-2">
    <h6>Armenia - Quindío</h6>
    </div>
    <div className="infoFooter">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3374934140215!2d-75.67170319999998!3d4.533107600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5adb7fc5ec7%3A0x5f78ec805f27139c!2sCra.%2013%20%2318-31%20Oficina%20304%2C%20Armenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1682305446427!5m2!1ses!2sco" className="maps" loading="lazy"/>
    <span className="horario">Carrera 13 #18-31 Edificio Sociedad de Ingenieros Oficina 304</span>
    </div>
    
    
    
    </div>


    </div>

 </nav>
    </footer>
    </div>
  )
}

export default Footer