/** @format */

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFav: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAV",
      payload: id,
    }),
});

class JobDetail extends Component {
  htmlDesc = () => {
    return { __html: this.props.selected.description };
  };
  htmlApply = () => {
    return { __html: this.props.selected.how_to_apply };
  };

  render() {
    return this.props.selected ? (
      <Container>
        <div className="col-md-8 mt-5">
          <div className="row mt-2">
            <div className="col-sm-12">
              <h1 className="mt-5">{this.props.selected.title}</h1>
              <h2 className="mt-2">{this.props.selected.company}</h2>
            </div>
          </div>
          <Button
            className="w-100"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              this.props.addToFav(this.props.selected);
            }}
          >
            Bookmark
          </Button>
          <div className="row mt-5">
            <div className="col-sm-5 mt-3">
              <img
                className="selected-cover"
                src={this.props.selected.company_logo}
                alt="selected selected"
              />
            </div>

            <div className="col-sm-7">
              <span className="font-weight-bold">Job Description:</span>{" "}
              <div dangerouslySetInnerHTML={this.htmlDesc()}></div>
              <a href={this.props.selected.url} />
            </div>
          </div>
        </div>
      </Container>
    ) : (
      <div className="col-sm-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h3>Please select a job!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
