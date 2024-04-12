import React from "react";

import './header.css';

const nav__links= [
     {
        path: "#home", 
        display:"Home"
     },

     {
        path: "#about", 
        display:"About"
     },

     {
        path: "#services", 
        display:"Services"
     },

     {
        path: "#projects", 
        display:"Projects"
     },

     {
        path: "#contact", 
        display:"Contact"
     }
]
const header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="nav__wrapper">
            <div className="logo">
              <h2>Aditya</h2>
            </div>

            {/* <!------- Navigation --------> */}

            <div className="navigation">
                <ul className="menu">
                    {
                        nav__links.map((item, index) =>(
                            <li className="menu__item">
                                <a href= {item.path} className="menu__link">{item.display}</a></li>
                        )) 
                    }
                </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
