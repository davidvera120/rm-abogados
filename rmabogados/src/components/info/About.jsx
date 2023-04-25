import React from 'react';
import './info.css';
import misionrm from '../../images/misionrm.jpeg';
import visionrm from '../../images/visionrm.jpeg';

const About = () => {
  return (
    <div  className="row bg-light">
    <div className="banner2">
    <h1 className="letraBanner2">"La justicia es la constante y perpetua voluntad de dar a cada uno su derecho" - Justiniano</h1>
    </div>
    <div  className="col-12  mb-5">
  <h1 className="titleA">Quiénes Somos</h1>
 
  <p className="textA"> Somos una firma de abogados dedicada a proporcionar asesoramiento legal y representación en diversas áreas del derecho. Nuestro equipo está formado por abogados altamente capacitados y experimentados que trabajan en estrecha colaboración con nuestros clientes para brindar soluciones jurídicas efectivas y personalizadas.

  <br/><br/>Nuestra firma se enorgullece de ofrecer un servicio excepcional y comprometido con los más altos estándares éticos y profesionales. Nos esforzamos por mantener relaciones de confianza y lealtad con nuestros clientes, y creemos que la comunicación clara y frecuente es clave para lograr resultados exitosos.
  
 <br/> <br/>Nos especializamos en áreas tales como derecho comercial, derecho laboral, derecho penal, derecho de familia, derecho inmobiliario y litigios. Con una amplia experiencia en estas áreas y un conocimiento profundo de las leyes y regulaciones aplicables, estamos equipados para proporcionar asesoramiento legal completo y representación eficaz en una variedad de situaciones legales.
  
  <br/><br/>En nuestra firma, creemos que el éxito se logra a través de la colaboración y el trabajo en equipo. Cada abogado de nuestro equipo aporta habilidades y experiencia únicas, lo que nos permite abordar cada caso desde múltiples perspectivas y encontrar soluciones creativas y efectivas.
  
  Gracias por su interés en nuestra firma, esperamos tener la oportunidad de trabajar con usted en el futuro</p>
    </div>

    <div  className="col-12  mb-5">
    <h1 className="titleA2">Misión</h1>
    <div className="containerInfo">
    <p className="textA2" >Nuestra misión es proporcionar a nuestros clientes un asesoramiento legal personalizado, de alta calidad y rentable, que les permita alcanzar sus objetivos comerciales y personales. Nos esforzamos por construir relaciones de confianza y lealtad con nuestros clientes, basadas en la comunicación clara, la transparencia y el compromiso con los más altos estándares éticos y profesionales.</p>
    <img className="imgInfo2"  src={misionrm} alt="mision"/>
    </div>
    </div>

    <div  className="col-12  mb-5">
    <h1 className="titleA1">Visión</h1>
    <div className="containerInfo">
    <img className="imgInfo"  src={visionrm} alt="vision"/>
    <p className="textA2">Ser una firma de abogados líder en nuestro país, reconocida por nuestra excelencia en el servicio al cliente, la calidad de nuestro trabajo y nuestra capacidad para brindar soluciones jurídicas innovadoras y efectivas.</p>
    </div>
    </div>
   
    </div>
  )
}

export default About