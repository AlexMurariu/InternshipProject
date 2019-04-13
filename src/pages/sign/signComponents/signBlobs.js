import React from "react";
import Blob from "../../../components/background/blob";

class SignBlobs extends React.Component {
  renderBlob(i) {
    const listIndex = i - 4;
    return (
      <Blob
        index={i}
        width={this.props.width[listIndex]}
        height={this.props.height[listIndex]}
        d={this.props.d[listIndex]}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderBlob(4)}
        {this.renderBlob(5)}
        {this.renderBlob(6)}
      </div>
    );
  }
}

export default SignBlobs;
