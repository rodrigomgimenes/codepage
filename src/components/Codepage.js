import React, { Component } from "react";
import HomeButton from "./pages/homepage/HomeButton";
import Assignment from "./pages/assignment/Assignment";
import uoftAssignmentList from "./pages/assignment/uoft_assignment.json";


class Codepage extends Component {
  state = {
    uoftAssignmentList
  };

  styles = {
    profileImgSize: {
      height: "22px", 
      width: "22px"
    },
    iconFontSize: {
      fontSize: "15px"
    }
  }

  render() {
    return (
      <div>
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-light">
            <div className="navbar-header">
              {/* ROUTE to main page */}
              <HomeButton />
            </div>
            <div className="navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"> 
                  <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark" href="true" onClick={(e) => {e.preventDefault();}}>
                    <span className="material-icons">menu</span>
                  </a> 
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className="left-sidebar">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="user-profile"> 
                  <a className="has-arrow waves-effect waves-dark" href="true" onClick={(e) => {e.preventDefault();}} aria-expanded="false">
                    <img src="./assets/icons/profile.png" alt="user" style={this.styles.profileImgSize} />
                    <span className="hide-menu">Rodrigo M. Gimenes</span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    <li><a href="https://rodrigomgimenes.github.io/uofresponsiveportfolio.github.io/">My Homepage</a></li>
                    <li>
                      <a href="true" onClick={(e) => {e.preventDefault();}} className="has-arrow waves-effect waves-dark">Social Media <span className="label label-coffee pull-right">2</span></a>
                      <ul aria-expanded="false" className="collapse">
                        <li><a href="https://github.com/rodrigomgimenes"><i className="fab fa-github-square"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/rodrigo-m-gimenes-b0a1a227/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-divider"></li>
                <li className="nav-small-cap">UNIVERSITY OF TORONTO</li>
                <li> 
                  <a className="has-arrow waves-effect waves-dark" href="true" onClick={(e) => {e.preventDefault();}} aria-expanded="false">
                    <i className="fas fa-laptop-code" style={this.styles.iconFontSize}></i>
                    <span className="hide-menu">Assignments <span className="label label-coffee pull-right">{this.state.uoftAssignmentList.length}</span></span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                  {/* <ul> */}
                    {/* ROUTE to every UOFT assignment */}
                    {this.state.uoftAssignmentList.map(uoft => (
                      <Assignment assignment={uoft.assignment} href={uoft.href} />
                    ))}
                  </ul>
                </li>
                <li className="nav-small-cap">PROJECTS</li>
                <li> 
                  <a className="waves-effect waves-dark" href="https://rodrigomgimenes.github.io/uoftgroupprojectgeotrivia.github.io/" aria-expanded="false">
                  <i className="fas fa-share" style={this.styles.iconFontSize}></i>
                    <span className="hide-menu">Geo Trivia</span>
                  </a>
                </li>
                <li> 
                  <a className="waves-effect waves-dark" href="https://stark-woodland-75959.herokuapp.com/" aria-expanded="false">
                    <i className="fas fa-share" style={this.styles.iconFontSize}></i>
                    <span className="hide-menu">Open Sound</span>
                  </a>
                </li>
                <li className="nav-small-cap">MORE CODING</li>
                <li> 
                  <a className="has-arrow waves-effect waves-dark" href="true" onClick={(e) => {e.preventDefault();}} aria-expanded="false">
                    <i className="fas fa-code" style={this.styles.iconFontSize}></i>
                    <span className="hide-menu">Personal Study <span className="label label-coffee pull-right">{/*{this.state.PersonalCodeList.length}*/}0</span></span>
                  </a>
                  <ul aria-expanded="false" className="collapse">
                    {/* ROUTE to every Personal Code */}
                    <li><span className="hide-menu">Coming Soon <i className="far fa-clock" style={this.styles.iconFontSize}></i></span></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default Codepage;