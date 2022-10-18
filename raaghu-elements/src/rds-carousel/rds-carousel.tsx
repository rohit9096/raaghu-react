
import React, { Fragment, useState } from "react";
import "./rds-carousel.scss";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsCarouselProps {
  role?: string;
  Indicators: boolean;
  crossFade?: boolean;
  controls?: boolean;
  carouselItems: any[];
}

const RdsCarousel = (props: RdsCarouselProps) => {
  const Role = `${props.hasOwnProperty("role") ? props.role : "basic"}`;
  let Fade = props.crossFade || false;
  
 //let length = props.carouselItems.length - 1; 
  
  return (
    <Fragment>
      {Role == "basic" && (
        <div
          id="carouselExampleCaptions"
          className={
            Fade === true ? "carousel slide carousel-fade" : "carousel slide "
          }
          data-bs-ride="false"
        >
          {props.Indicators === true && (
            <div className="carousel-indicators">
              {props.carouselItems.map((carouselItem) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={carouselItem.id - 1}
                  className={carouselItem.id == 1 ? "active" : ""}
                  aria-current="true"
                  aria-label="Slide"
                ></button>
              ))}
            </div>
          )}
          <div className="carousel-inner">
            {props.carouselItems.map((carouselItem) => (
              <div
                className={`carousel-item ${
                  carouselItem.id == 1 ? "active" : ""
                }`}
              >
                <img
                  src={props.carouselItems[carouselItem.id - 1].imgUrl}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            ))}
          </div>
          {props.controls === true && (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          )}
          {props.controls === true && (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          )}
        </div>
      )}

      {Role == "advanced" && (
        <div
          id="carouselExampleCaptions"
          className={
            Fade === true ? "carousel slide carousel-fade" : "carousel slide "
          }
          data-bs-ride="false"
        >
          {props.Indicators === true && (
            <div className="carousel-indicators indicators ">
              {props.carouselItems.map((carouselItem) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={carouselItem.id - 1}
                  className={carouselItem.id == 1 ? "active" : ""}
                  aria-current="true"
                  aria-label="Slide"
                ></button>
              ))}
            </div>
          )}
          <div className="carousel-inner">
            {props.carouselItems.map((carouselItem) => (
              <div
                className={`carousel-item ${
                  carouselItem.id == 1 ? "active" : ""
                }`}
              >
                <div className="content">
                  <span>
                  <RdsIcon name="quote" height="20px" width="20px" fill={false} stroke={true} ></RdsIcon>
                  <img
                    src={props.carouselItems[carouselItem.id - 1].imgUrl}
                    className="iconImage"
                    alt="..."
                  />
                   <RdsIcon name="quote_right" height="20px" width="20px" fill={false} stroke={true}></RdsIcon>
                   </span>
                  <br/>
                  <h1>{props.carouselItems[carouselItem.id - 1].name}</h1>
                  <h6>{props.carouselItems[carouselItem.id - 1].roleName} </h6>
                  <br/>
                  <p className="subtitle">{props.carouselItems[carouselItem.id - 1].subTitle}</p>
                  <br/>
                </div>
              </div>
            ))}
          </div>
          {props.controls === true && (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          )}
          {props.controls === true && (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
};
export default RdsCarousel;
