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
    this.fetchJobs();
  };

  fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}`
      );
      let jobs = await response.json();
      this.setState({ jobs: jobs });
      console.log(jobs);
    } catch (error) {
      console.log(error);
    }
  };

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
            {this.state.jobs.length > 0 &&
              this.state.jobs.map((job, index) => (
                <Col xs={6}>
                  <JobList
                    style={{}}
                    job={job}
                    getJob={this.props.getJob}
                    top={index}
                    key={index}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Search);
