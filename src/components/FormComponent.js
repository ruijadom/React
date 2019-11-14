import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Ruijadom",
      skill: "React",
      notes: ""
    };

    this.handleName = event => {
      this.setState({
        user: event.target.value
      });
    };

    this.handleSkill = event => {
      this.setState({
        skill: event.target.value
      });
    };

    this.handleNotes = event => {
      this.setState({
        notes: event.target.value
      });
    };

    this.handleSubmit = () => {
      alert(`${this.state.user} ${this.state.skill} ${this.state.notes}`)
    }
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem", margin: "50px auto" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user}
                  onChange={this.handleName}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Skill</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.skill}
                  onChange={this.handleSkill}
                >
                  <option value="React">React</option>
                  <option value="Angular">Angular</option>
                  <option value="Vue">Vue</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.notes}
                  onChange={this.handleNotes}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default FormComponent;
