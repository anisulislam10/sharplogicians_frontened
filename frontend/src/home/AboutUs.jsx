import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
// import "./aboutus.css";

const AboutUs = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL_GET_ABOUT}`
        );
        setValues(response.data.aboutus);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetch();
  }, []);

  const firstItem = values[0];

  return (

    <><Helmet>
    <meta charSet="utf-8" />
    <title>About | SharpLogicians | Creative Digital Agency</title>
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
    <div className="about-area ptb--120 bg_color--5" id="about">
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                {firstItem ? (
                  <div style={{height:'800%'}}>
                    <div className="left-section">
                      <img
                        src={firstItem.image}
                        alt="About Images"
                      />
                    </div>
                  </div>
                ) : (
                  <p>Loading image...</p> // Show loading text if firstItem is not yet available
                )}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">About Us</h2>
                  {firstItem ? (
                    <p className="description" style={{textAlign:'left'}}>{firstItem.description}</p>
                  ) : (
                    <p>Loading description...</p> // Show loading text if firstItem is not yet available
                  )}
                </div>

                <div className="row mt--30">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      {firstItem ? <p style={{textAlign:'left'}}>{firstItem.mission}</p> : <p>Loading mission...</p>}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Vision</h3>
                      {firstItem ? <p style={{textAlign:'left'}}>{firstItem.vision}</p> : <p>Loading vision...</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;