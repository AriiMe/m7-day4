/** @format */

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (id) =>
    dispatch({
      type: "REMOVE_JOB_FROM_FAV",
      payload: id,
    }),
  selectThisJob: (job) =>
    dispatch({
      type: "SELECT_ONE_JOB",
      payload: job,
    }),
});

class Fav extends Component {
  handleSubmit = (fav) => {
    this.props.selectThisJob(fav);
    this.props.history.push("/details/");
  };
  //
  render() {
    return (
      <div className="row mt-4 mb-4 mx-4">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {this.props.fav.map((fav, i) => (
            <li key={i} className="my-4 mx-4">
              <Button
                variant="danger"
                onClick={() => this.props.removeFromFav(fav.id)}
              >
                Remove
              </Button>
              <img
                onClick={(e) => this.handleSubmit(fav)}
                style={{ height: "150px", width: "150px" }}
                className="mt-3"
                src={fav.company_logo}
                alt="fav selected"
              />
              {fav.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Fav));
