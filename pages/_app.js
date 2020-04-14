import React, { Component } from "react";
import App from "next/app";
import "../styles/index.css";

class MyApp extends App {
  render() {
    const { pageProps, Component } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
