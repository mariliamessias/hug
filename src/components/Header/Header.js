import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
render(){
  return(
    <div>
      <nav className ="navbar navbar-expand-md navbar-dark opaque-navbar"> 

      <a className="navbar-brand" href="#">Vamos Conversar?</a> 

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className="collapse navbar-collapse" id="navbarMainToggler">
          <div className = "navbar-nav">
            <a className="nav-item nav-link" href="#">Início</a>
            <a className="nav-item nav-link" href="#">Sobre</a>
            <a className="nav-item nav-link" href="#">Login</a>
          </div>
        </section>
      </nav>
      </div>
    )
  }
}

export default Header