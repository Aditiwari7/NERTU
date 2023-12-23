import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import nertuLogo from "../assets/nertulogo.jpeg";

class Navbar extends Component {
  state={clicked:false};

  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo" style={{height:50}}>
          <img src={nertuLogo} style={{height:50, paddingRight:5}}/><h1 style={{fontSize:30, paddingTop:8}}>NERTU</h1>
          </div>
        <div className="menu-icons" style={{margin:-100}} onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} style={{marginTop:-1}}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
