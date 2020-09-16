import React from "react";
import { compose, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Layout from "../../hoc/Layout/Layout";
import Footer from "../../components/Footer";
import classes from "./index.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 47.9271964, lng: 106.912086 }}
  >
    <Marker
      position={{ lat: 47.9271964, lng: 106.912086 }}
      onClick={props.onToggleOpen}
    ></Marker>
  </GoogleMap>
));

const Contact = (props) => {
  return (
    <Layout>
      <div>
        <div
          className={classes.rowblock}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px",
            margin: "0px",
          }}
        >
          <div className={classes.grid}>
            <div className={classes.grid1}>
              <MapWithAMakredInfoWindow
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQyPzes_R7MrSuNJTYI0bOEGlUdXfoSLU"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div
                    style={{
                      height: `400px`,
                      width: "600px",
                      marginTop: "50px",
                      marginLeft: "250px",
                    }}
                  />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>

            <div
              className={classes.grid2}
              style={{
                marginTop: "50px",
                fontFamily: "Roboto Slab",
                color: "#3C4858",
                marginLeft: "10px",
              }}
            >
              <div className="address" style={{ marginRight: "50px" }}>
                <h3>
                  <FaMapMarkerAlt
                    style={{ marginRight: "20px", color: "##0054a5" }}
                  />
                  Манай хаяг
                </h3>
                <p style={{ fontSize: "14px" }}>
                  Улаанбаатар хот, чингэлтэй дүүрэг, 6-р хороо, Сүхбаатарын
                  гудамж-12
                  <br />
                  "Монголын зохиолчдын эвлэл"-ийн төв байр 303 тоот
                </p>
              </div>
              <div className="contact">
                <h3 style={{ marginTop: "100px" }}>
                  <FaPhone style={{ marginRight: "20px", color: "##0054a5" }} />
                  Холбоо барих
                </h3>
                <p style={{ fontSize: "14px" }}>
                  info@delhii.mn <br />
                  +976-99650208
                  <br />
                  Даваа - Баасан, 9:00-18:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
