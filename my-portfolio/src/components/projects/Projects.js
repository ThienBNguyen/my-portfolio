import React, { Component } from "react";
import First from "../../images/first-project.jpg";
import Second from "../../images/second-project.jpg";
import Third from "../../images/third-project.jpg";
import Four from "../../images/four-project.jpg";
import "./Project.scss"
export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <div className="Project">
      <img className="Project-item" src={First} alt="Thien Nguyen " />
     
      </div>
      <div className="Project">
       <img className="Project-item" src={Second} alt="Thien Nguyen "/>
     
      </div>
      <div className="Project">
      <img className="Project-item" src={Third} alt="Thien Nguyen " />
    
      </div><div className="Project">
       <img className="Project-item" src={Four} alt="Thien Nguyen " />
      </div>

      </div>
        
       
        
       
    );
  }
}
