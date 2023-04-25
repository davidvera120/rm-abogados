
import { useParams } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { datosCards } from '../../data/data';
import "./service.css";
import { v4 as uuidv4 } from 'uuid';

const Service = () => {

    const {id}=useParams();
    const [servicio, setServicio]=useState({});
    const [servicioinfo, setServicioinfo]=useState([]);

    const filtro = async () => {
  
      const filtrado1 = datosCards.filter((elemento) =>{
        return elemento.id===id; 
    });
    const filtrado2=filtrado1[0];
   setServicio(filtrado2);
   setServicioinfo(filtrado2.textos);
    }
  
    useEffect(() => {
      filtro()
    },[filtro]);

  return (
    <div className="row">
    <div className="banner3">
    <div className="col-12">
    <h1 className="title-service">{servicio.title}</h1>
    </div>
    </div>
    <div  className="col-12 textService">
    <p className="textS"> Nuestros profesionales cuentan con excelentes y destacadas condiciones académicas y profesionales, adicionadas con un amplio recorrido y experiencia en todos los aspectos legales, cuya práctica se desarrolla desde la asesoría, consultoría, apoyo y acompañamiento en las diferentes especialidades de ésta área,  extendiéndose hasta la representación extrajudicial y judicial de sus intereses, involucrando los siguientes aspectos:</p>
    </div>
    <div  className="col-12 listS">
   
    <ul>
    {
       servicioinfo?.map((item)=>{
          return( 
  <li key={uuidv4()}><p className="itemColor">{item}</p></li>

  )})
}
</ul>

</div>
    </div>
  )
}

export default Service