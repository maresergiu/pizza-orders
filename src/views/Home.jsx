import React, { Component } from "react"
import { connect } from "react-redux"
import { showLoader, hideLoader } from "../store/loader/actions"
import GlobalComponents from "../components/GlobalComponents.jsx"
import Navigation from "../components/Navigation.jsx";
import "../scss/views/home.scss";

class HomePage extends Component {
  render() {
    return (
      <section data-testid="home-page" className="home-page">
        <div className="holder">
          <Navigation />
        </div>
        <GlobalComponents />
      </section>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {
  showLoader,
  hideLoader,
})(HomePage)
