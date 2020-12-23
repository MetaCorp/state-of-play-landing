import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

//Star Rating
import StarRatings from "react-star-ratings";

class CourseBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.courses.map((course, key) => (
          <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
            <Card className="courses-desc overflow-hidden rounded shadow border-0">
              <div className="position-relative d-block overflow-hidden">
                <img
                  src={course.image}
                  className="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div className="overlay-work"></div>
                <Link to="#" className="text-white h6 preview">
                  Preview Now <i className="mdi mdi-chevron-right"></i>
                </Link>
              </div>
              <CardBody>
                <h5>
                  <Link to="#" className="title text-dark">
                    {course.title}
                  </Link>
                </h5>
                <div className="rating">
                  <ul className="list-unstyled mb-0">
                    <li className="list-inline-item">
                      <StarRatings
                        rating={course.rating}
                        starRatedColor="#F17425"
                        starEmptyColor="none"
                        numberOfStars={5}
                        name="rating"
                        starDimension="19px"
                        starSpacing="2px"
                      />
                    </li>
                    <li className="list-inline-item">
                      {course.rating} Star ({course.person}
                      <i className="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div className="fees d-flex justify-content-between">
                  <ul className="list-unstyled mb-0 numbers">
                    <li>
                      <i className="mdi mdi-school text-muted"></i>{" "}
                      {course.students} Students
                    </li>
                    <li>
                      <i className="mdi mdi-book text-muted"></i>{" "}
                      {course.lesson} Lession
                    </li>
                  </ul>
                  <h4>
                    <span className="h6">$</span>
                    {course.price}
                  </h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default CourseBox;
