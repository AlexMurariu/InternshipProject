import React from "react";
import Blob from "./blob";

class Blobs extends React.Component {
  renderBlob(i) {
    const listIndex = i - 1;
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
      <div className="blobs-container">
        {this.renderBlob(1)}
        {this.renderBlob(2)}
        {this.renderBlob(3)}
      </div>
    );
  }
}

export default Blobs;
