import React from "react";

function BoatForeground() {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="136.4 299.1 250.4 147.7"
    >
      <defs>
        <path
          id="b"
          d="M286.4 329.2l29-6.2 6.1-1.4 29.5-5.2 19-2.1 5.4 5.5a44.5 44.5 0 0 1 12.8 29.5c-5.4 9.8-9.8 16.6-13.1 20.5-5 5.8-7.2 8.9-25.3 25.6-18.2 16.7-21.7 14.4-33.8 21.9l-6 3.7-27.8-3.5c-34-4.4-66.8-15-97-31.4l-8.3-4.6c-4.2-2.3-8-5-11.4-8.2l-1.9-1.7a116.1 116.1 0 0 1-21.1-26.4l-4.3-7.3v-.1l25.1 4.3c18.3 3.1 37 3 55.3-.4l67.8-12.5z"
        />
        <path
          id="c"
          d="M358.4 312l2.1-1.3c2.5-1.5 5.3-2.5 8.1-3.1l1-.2 1.8.9c1.7.9 3 2.4 3.8 4.3l.2.6-4.6 21.6a220.8 220.8 0 0 1-29 71.2c-7.3 11.2-12.4 16.7-17.3 18.3-3.3 1-8.4 0-15.4-3.3l2.3-3c22-27.9 37.2-60.4 44.6-95l2.4-11z"
        />
      </defs>
      <use fill="#a26e5c" xlinkHref="#b" />
      <use fillOpacity="0" stroke="#c78974" strokeWidth="1" xlinkHref="#b" />
      <g>
        <use fill="#bb816d" xlinkHref="#c" />
        <use fillOpacity="0" stroke="#c78974" strokeWidth="0" xlinkHref="#c" />
      </g>
    </svg>
  );
}

export default BoatForeground;
