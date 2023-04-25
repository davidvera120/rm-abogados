import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { BotonFlotante } from '../styles/PagIntro';


export const Whatsapp = () => {
  return (
    <BotonFlotante>
    <a href="https://wa.me/3204466048"  target="_blank">
        <WhatsAppIcon/>
    </a>
</BotonFlotante>
  )
}

export default Whatsapp