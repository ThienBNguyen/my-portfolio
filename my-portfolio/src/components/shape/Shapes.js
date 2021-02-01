import React, { Component } from 'react'
import shape1 from "../../images/shape1.svg"
import shape2 from "../../images/shape2.svg"
import shape3 from "../../images/shape3.svg"
import shape4 from "../../images/shape4.svg"
import shape5 from "../../images/shape5.svg"

import './Shapes.scss'
export default class Shapes extends Component {
    render() {
        return (
            <div className="Shapes">
               <div className="part1 shape" ><div className="xmov1"><img src={shape1} className="ymov"/></div></div>
               <div className="part2 shape" ><div className="xmov2"><img src={shape2} className="ymov"/></div></div>
               <div className="part3 shape" ><div className="xmov"><img src={shape3} className="ymov"/></div></div>
               <div className="part4 shape" ><div className="xmov"><img src={shape4} className="ymov"/></div></div>
               <div className="part5 shape" ><div className="xmov"><img src={shape5} className="ymov"/></div></div>
             
            </div>
        )
    }
}
