import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse ",
    links: [
      {
        id: 1,
        path: "/",
        text: "home"
      },
      {
        id: 2,
        path: "/projects/",
        text: "projects"
      }
    ]
  };
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show"
        });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-bg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
