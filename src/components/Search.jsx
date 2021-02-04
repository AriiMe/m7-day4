/** @format */

import { React, Component } from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import JobList from "./JobList";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const fetchJobs = async (dispatch) => {
  try {
    let response = await fetch(
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${"Software Engineer"}&location=${"Berlin"}`
    );
    let jobs = await response.json();
    return dispatch({ type: "POPULATE_JOB_LIST", payload: jobs });
  } catch (error) {
    console.log(error);
    return dispatch({ type: "SET_ERROR_CODE", payload: 404 });
  }
};
const mapDispatchToProps = (dispatch) => ({
  fetchJobs: async (state) => {
    try {
      let response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${state.job}&location=${state.location}`
      );
      let jobs = await response.json();
      return dispatch({ type: "POPULATE_JOB_LIST", payload: jobs });
    } catch (error) {
      console.log(error);
      return dispatch({ type: "SET_ERROR_CODE", payload: 404 });
    }
  },
});

class Search extends Component {
  state = {
    job: "",
    location: "",
    validated: false,
    jobs: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.fetchJobs(this.state);
  };

  // fetchJobs = async () => {
  //   try {
  //     let response = await fetch(
  //       `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}`
  //     );
  //     let jobs = await response.json();
  //     this.setState({ jobs: jobs });
  //     console.log(jobs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <div>
        <Container className="mt-5">
          <h2>Search for jobs in your area</h2>
          <Form onSubmit={(e) => this.handleSubmit(e)} className="signInForm">
            <Row className="mt-3">
              <Col xs={12}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Position"
                    validated={this.state.validated}
                    aria-label="Position"
                    aria-describedby="basic-addon1"
                    value={this.state.job}
                    onChange={(e) =>
                      this.setState({ job: e.currentTarget.value })
                    }
                  />
                </InputGroup>
              </Col>
              <Col xs={12}>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Location"
                    name="query"
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                    value={this.state.location}
                    onChange={(e) =>
                      this.setState({ location: e.currentTarget.value })
                    }
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form>
          <Button
            variant="primary"
            style={{ borderRadius: "100px" }}
            className="w-100"
            type="submit"
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </Container>
        <Container className="mt-5 d-flex justify-content-center">
          <Row>
            {this.props.jobList.length > 0 &&
              this.props.jobList.map((job, index) => (
                <Col xs={6}>
                  <JobList style={{}} job={job} top={index} key={index} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
