import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/vendors/linericon/style.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/flaticon.css";
import "../assets/vendors/lightbox/simpleLightbox.css";
import "../assets/vendors/nice-select/css/nice-select.css";
import "../assets/vendors/animate-css/animate.css";
import "../assets/css/responsive.css";

 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout