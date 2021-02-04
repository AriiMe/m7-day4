/** @format */
import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  selectThisJob: (job) =>
    dispatch({
      type: "SELECT_ONE_JOB",
      payload: job,
    }),
});

class JobList extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.selectThisJob(this.props.job);
    this.props.history.push("/details/");
  };
  render() {
    return (
      <Card
        onClick={(e) => this.handleSubmit(e)}
        style={{ height: "450px" }}
        className="w-50 text-center mt-5 mr-3 mb-5 d-flex justify-content-center"
      >
        {console.log(this.props.top)}
        <Card.Img
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
          className="p-2"
          src={this.props.job.company_logo}
        />
        <Card.Body>
          <Card.Title className="jobTitleCard">
            {this.props.job.title}
          </Card.Title>
          <Card.Text>
            {this.props.job.location}, {this.props.job.type}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(JobList)
);
