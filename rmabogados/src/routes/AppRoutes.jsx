
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//components
import {Navbar, Footer, Whatsapp} from "../components"
//pages
import {Home, Lafirma, Servicio} from "../pages"



 export const AppRoutes =() => {

        return (
               
                <BrowserRouter> 
                <div className="container-fluid">
                <Navbar/>
<Whatsapp/>
                    <Routes>
                    <Route path="/"   element={<Home />} />
                    <Route path="/lafirma"   element={<Lafirma />} /> 
                    <Route path="/servicio/:id"   element={<Servicio />} />
                    </Routes>

                <Footer />
                </div>
                </BrowserRouter>  
        );
    }

export default AppRoutes;