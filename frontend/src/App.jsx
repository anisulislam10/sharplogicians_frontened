import "./index.scss";
import React, { useState } from "react";
// import dotenv

import "photoswipe/dist/photoswipe.css";
import PageScrollTop from "./component/PageScrollTop";

// Home layout
;
import CreativeLanding from "./home/CreativeLanding";


// Dark Home Layout


// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";

import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import Error404 from "./elements/error404";
import About from './home/About'

import AboutTeam from './elements/team/AboutTeam'
// New  Component


import { Route, Routes } from "react-router-dom";
import Mainpage from "./Admin/Mainpage";
import SignIn from "./Admin/pages/auth/Signin";

import Contact from "./elements/Contact";
import QuoteForm from "./component/header/QuoteForm";


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 
 
  return (

    <>
      <Routes>
        
        <Route path="old/">
          {/* Only CreativeLanding is now used */}
          <Route index element={<CreativeLanding />} />
          
          <Route path={`old/about`} element={<About />} />
          <Route path={`old/team`} element={<AboutTeam />} />
          <Route path={`old/contact`} element={<Contact />} />
          <Route path={`old/quote`} element={<QuoteForm />} />

          

         
          {/* Element Layout */}
          <Route path={`old/service`} element={<Service />} />
          <Route path={"old/service-details/:id"} element={<ServiceDetails />} />
          
          <Route path={`old/portfolio-details/:id`} element={<PortfolioDetails />} />
          <Route path={`old/blog`} element={<Blog />} />
          <Route path={`old/blog-details/:id`} element={<BlogDetails />} />
          {/* <Route path={`old/testimonial/:id`} element={<Testimonial />} /> */}

          
          {/* Login Route */}
          <Route
                    path="/old/admin/*"
                    element={
                        isAuthenticated ? (
                            <Mainpage />
                        ) : (
                            <SignIn onSignIn={() => setIsAuthenticated(true)} />
                        )
                    }
                />
          




          {/* Error Route */}
          <Route path={`404`} element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <PageScrollTop />
    </>
  );
}

export default App;
