import React from "react";
import Skills from "./skill/Skills"
import ThienImage from "../../images/thien-image.png";
import './About.scss'
import ParticlesContainer from './particlescontainer/ParticlesContainer';
export default function About() {
  return (
    <div style={{
          position: "relative",
       paddingTop:'0vh',
          width: "100%",
          height: "80vh",
          marginBottom:'12rem',
          // after scroll
        }}>
    <ParticlesContainer />
    <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}>
      <div className ="About"><img src={ThienImage} alt="Thien Nguyen " />
    <h1>About Me</h1>
    <div className="about-text ">
          <h2>Thien Nguyen</h2>
      <h4>front-end developer</h4>
      <p>
         A self-taught developer with years of
        self-learning. i finished my bachelor in public health however I know
        that working in healthcare is not for me. first time, i know about code
        and create amazing make me more excited and challenge my self more. i
        have proven ability in developing multi-page and single page website
        with SASS and javascript and proficient in ReactJs to building user
        interfaces and create reusable UI components.
      </p></div>
      </div>
      
      <Skills/>
      </div >
</div>
   
    
  );
}
