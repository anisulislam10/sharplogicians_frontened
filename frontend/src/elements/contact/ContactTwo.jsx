import React, { Component, useEffect, useState } from "react";
import ContactForm from "./ContactForm";

import about from "../../assets/images/about/about-6.jpg";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const ContactTwo =()=> {
const [Value, setValue] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL_CONTACT}/get`);
        console.log("get from contact:", response.data.contact);
        setValue(response.data.contact)
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);
  
 
    return (
      <>
       
    <Helmet>
      <meta charSet="utf-8" />
      <title> SharpLogicians | Creative Digital Agency</title>
      <meta
        name="description"
        content="Around - Multipurpose Bootstrap Template"
      />
      <meta
        name="keywords"
        content="bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
      />
      <meta name="author" content="Createx Studio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" color="#5bbad5" href="safari-pinned-tab.svg" />
      <meta name="msapplication-TileColor" content="#766df4" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Us.</h2>
                <p className="description" style={{textAlign:'left'}}> 
                  
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">

{
  Value && Value?(
    

  <img src={Value[0].image} alt="trydo" />

  ):(
    <p>No Image Available</p>
  )
}

              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }

export default ContactTwo;
