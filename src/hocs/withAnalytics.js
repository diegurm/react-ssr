import React, { Component } from "react";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import ReactGA from "react-ga";

export default () => Composed =>
  class extends Component {
    static getInitialProps(context) {
      return loadGetInitialProps(Composed, context);
    }

    componentDidMount() {
      //UA-11614830-11
      ReactGA.initialize("id-analytics");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
