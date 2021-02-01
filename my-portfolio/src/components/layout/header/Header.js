import React, { Component } from "react";
import "./Header.scss";
let lastScrollY = 0;
let ticking = false;
export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  nav = React.createRef();
  
  handleScroll = () => {
    lastScrollY = window.scrollY;
   console.log('Scroll event detected!');
   console.log(lastScrollY);
    // if (!ticking) {
    //   window.requestAnimationFrame(() => {
    //     this.Header.current.style.background = `red`;
    //     ticking = false;
    //   });
   
    //   ticking = true;
    // }
  };
  render() {
    return (
      <div className="Header Header-after">
      <div className="logo sized">
		    <div className="logo-bg logo-after"></div><span className="logo-text icon-logo-text">TN</span><a href="/"></a>
	    </div>
        <ul className="nav nav-after">
          <li><a href="#" target="_blank">about</a></li>
          <li><a href="#" target="_blank">skills</a></li>
          <li><a href="#" target="_blank">projects</a></li>
          <li><a href="#" target="_blank">contact</a></li>
        </ul>
      </div>
    );
  }
}
