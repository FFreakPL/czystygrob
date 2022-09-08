import React, { useState, useEffect, useContext, createContext} from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import LandingPageInfo from "./LandingPageInfo";
import Footer from "./Footer";
// import Contact from './Contact';
// import Prices from './Prices';
// import About from './About';

export default function LandingPage(){
    const navigate = useNavigate();
    // const data= {
    //     step: 1,
    // }
    // const [state, setState] = useState(data)
    //
    // const getComponent = () => {
    //     switch (state.step) {
    //         case 1:
    //
    //
    // }
    // }

    return(
        <>
            <Header/>
            <LandingPageInfo/>
            <Footer/>
        </>
    );
}