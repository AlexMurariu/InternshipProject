import React from "react";

function Blob(props) {
  return (
    <div className="blob-container">
      <svg
        className={`blob${props.index}`}
        version="1.1"
        width={props.width}
        height={props.height}
        viewBox="0 0 600 600"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path d={props.d} />
        </g>
      </svg>
    </div>
  );
}

export default Blob;
