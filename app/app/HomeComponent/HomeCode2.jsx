import React from "react";
import Grid from "@mui/material/Grid";

import ShowComp from "./ShowComp";
import ShowComp2 from "./ShowComp2";
import Rotate from "./SrvrRotate";

import "animate.css";

import SteamHomePage from "./SteamHomePage";

import UserLikes3 from "../blogs2/page";
import css from "./css3.webp";
import react from "./react.webp";
import html from "./html5.webp";
import mern from "./mern.webp";
import next from "./next.webp";

import Image from "next/image";

import SvgHomePage from "./SvgHomePage";

const HomeCode = () => {
  return (
    <div suppressHydrationWarning>
      <div className="Home itemabout">
        <div className="_CSS" id="ContainerHome">
          <div className="Home_Circle ">
            <UserLikes3 />
            <Image
              src={css}
              style={{ width: "100%", height: "auto" }}
              alt="css"
              width={100}
              height={100}
              loading="lazy"
            />

            <SteamHomePage />
          </div>
        </div>
        <div
          className="_JAVASCRIPT"
          style={{
            marginTop: "250px",
            marginBottom: "200px",
            marginLeft: "50px",
          }}
          id="ContainerHome"
        >
          <div className="Home_Circle">
            <Image
              src={mern}
              style={{ width: "90%", height: "auto" }}
              alt="javascript.png"
              loading="lazy"
              width={100}
              height={100}
            />
            <SteamHomePage />
          </div>
        </div>
        <div
          className="_HTML"
          style={{
            marginTop: "350px",
            marginLeft: "-400px",
          }}
          id="ContainerHome"
        >
          <div className="Home_Circle">
            <Image
              src={html}
              style={{ width: "100%", height: "auto" }}
              alt="html"
              width={100}
              height={100}
              loading="lazy"
            />
            <SteamHomePage />
          </div>
        </div>
        <div>
          <div
            className="_REACT"
            style={{
              marginTop: "200px",
              marginRight: "50px",
            }}
            id="ContainerHome"
          >
            <div className="Home_Circle">
              <Image
                src={react}
                style={{ width: "100%", height: "auto" }}
                alt="react"
                loading="lazy"
                width={100}
                height={100}
              />
              <SteamHomePage />
            </div>
          </div>

          <div
            className="_NEXTJS"
            id="ContainerHome"
            style={{
              marginTop: "400px",
              marginLeft: "50px",
            }}
          >
            <div className="Home_Circle">
              <Image
                src={next}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={100}
                height={100}
                alt="nextjs"
                loading="lazy"
              />
              <SteamHomePage />
            </div>
          </div>

          <div>
            <div className="HomeDiv">
              <h1>
                <div className="animate__animated animate__bounce Animateiv0">
                  Hi there 👋 <br />
                </div>
                <div className="animate__animated animate__backInLeft Animateiv1">
                  {" "}
                  <p>
                    I am,{" "}
                    <span style={{ fontSize: "34px" }}>SuFiaN MusTaFa</span>
                  </p>{" "}
                </div>
                <div className="animate__animated animate__backInLeft Animateiv2">
                  Web Developer
                </div>
              </h1>
              <div className="animate__animated animate__backInLeft Animateiv3">
                <p
                  style={{
                    fontSize: "32px",
                    lineHeight: "1.2",
                    margin: "0 0 12px",
                  }}
                >
                  I am <span>27 years old</span> , residing in the province of{" "}
                  <span>KPK</span> , <span>Pakistan</span>, with a strong
                  passion for <span>coding,</span> and currently a{" "}
                  <span>student</span> in my last semester of{" "}
                  <span> MCS (Computer Science)</span>.
                </p>
              </div>

              <p className="animate__animated animate__backInLeft Animateiv4">
                I am an experienced web developer with a passion for creating{" "}
                <span> high-quality</span> , <span>user-friendly</span>, and{" "}
                <span>responsive websites</span>. I am always improving my
                skills to stay at the forefront of the industry. I have hands-on
                experience in <span>backend development</span> as well.
              </p>
              <div className="HomeInnerDiv animate__animated animate__backInLeft Animateiv5">
                <p>
                  <span
                    style={{
                      color: "white",
                      textShadow: "1px 1px black",
                    }}
                  >
                    Some of the web technologies i mostly used are:
                  </span>{" "}
                </p>
                <div className="animate__animated animate__backInLeft Animateiv6">
                  <p>
                    <Rotate />
                  </p>
                </div>
              </div>

              {/* <ShowComp /> */}
            </div>{" "}
            <SvgHomePage />
          </div>
        </div>
      </div>

      {/* <ShowComp2 /> */}
    </div>
  );
};

export default HomeCode;
