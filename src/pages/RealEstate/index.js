import React, { Component } from "react";

// import Component
import Section from "./Section";
import Process from "./Process";
import FeaturedItems from "./FeaturedItems";
import Client from "./Client";
import ExpertsTeam from "./ExpertsTeam";
import Blog from "./Blog";
import Categories from "./Categories";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

export default class index extends Component {
  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("buyButton").className = "btn btn-light";
    document.getElementById("brandLogo").src = logolight;
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
      document.getElementById("brandLogo").src = logodark;
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
      document.getElementById("brandLogo").src = logolight;
    }
  };
  render() {
    return (
      <React.Fragment>
        {/* Section */}
        <Section />

        <section className="section bg-white">
          <Categories />
          <Process />
          <FeaturedItems />
          <Client />
          <ExpertsTeam />
        </section>
        <Blog />
      </React.Fragment>
    );
  }
}
