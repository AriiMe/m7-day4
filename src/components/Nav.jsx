/** @format */

import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={() => this.props.history.push("/")}>
            <img
              alt=""
              src="http://dianedoumenge.com/img/indeed.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Search for jobs
          </Navbar.Brand>
          <Button
            className="ml-2"
            onClick={(e) => {
              e.preventDefault();
              this.props.history.push("/favourites/");
            }}
          >
            Favourites
          </Button>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Nav);
