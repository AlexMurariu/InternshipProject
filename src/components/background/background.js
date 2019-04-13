import React from "react";
import Blobs from "./blobs";
import "./background.css";
import * as BackgroundConstants from "./background-constants";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: BackgroundConstants.width,
      height: BackgroundConstants.height,
      d: BackgroundConstants.d
    };
  }

  render() {
    return (
      <div className="background-wrapper">
        <Blobs
          width={this.state.width}
          height={this.state.height}
          d={this.state.d}
        />
      </div>
    );
  }
}

export default Background;
