import React, { Component } from 'react'
import "./Skills.scss"
export default class Skills extends Component {
    render() {
        return (
            <div className="Skills">
            <h2>Skills</h2>
            <div>
                <div className="bar flex">
                  <div className="bar fill html" >
                    <div className="tag ">Html</div>
                  </div>
                  <p>90%</p>
                </div>
                  <div className="bar flex">
                  <div className="bar fill scss" >
                    <div className="tag ">Scss</div>
                  </div>
                  <p>90%</p>
                </div>
                <div className="bar flex">
                  <div className="bar fill react" >
                    <div className="tag ">React</div>
                  </div>
                  <p>80%</p>
                </div>
                <div className="bar flex">
                  <div className="bar fill javascript" >
                    <div className="tag ">Javascript</div>
                  </div>
                  <p>80%</p>
                </div>
                <div className="bar flex">
                  <div className="bar fill node" >
                    <div className="tag ">Node</div>
                  </div>
                  <p>50%</p>
                </div>
              </div>
            </div>
        )
    }
}
