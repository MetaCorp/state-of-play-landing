import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Row } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-60 mt-60" style={{ marginBottom: 60 }} id="contact">
          <Row className="justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">
                    Nous contacter
                </h4>
                <p className="text-muted para-desc mx-auto">
                    Commencez à réaliser vos états des lieux avec{" "}
                    <span className="text-primary font-weight-bold">Housely</span>.{" "}
                </p>

                <div className="subcribe-form mt-4 pt-2">
                  <Form>
                    <FormGroup>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border bg-white rounded-pill"
                        required
                        placeholder="Email Address"
                      />
                      <Button type="submit" className="btn btn-pills btn-primary">
                        Nous contacter
                      </Button>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
