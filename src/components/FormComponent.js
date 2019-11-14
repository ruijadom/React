import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  render() {

    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

    return (
      <>
        <Card style={{ width: "18rem", margin: "50px auto" }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <h3>Register</h3>
                <hr></hr>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handlePassword}
                />
              </Form.Group>

              <Button disabled={!isEnabled} variant="success" type="submit">
                Register
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default FormComponent;
