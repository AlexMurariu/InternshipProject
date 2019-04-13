import React, { Component } from "react";
import "./home.css";
import SignInForm from "../sign/login/SignInForm";
import Navbar from "../../components/navbar/navbar";
import SignBackground from "../sign/signComponents/background";
import Background from "../../components/background/background"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    return (
      <div>
        <Navbar />
        {(this.state.width > 1550 && this.state.height>600)  ? <SignBackground /> : <Background></Background>}
        <SignInForm />

      </div>
    );
  }
}

export default App;
