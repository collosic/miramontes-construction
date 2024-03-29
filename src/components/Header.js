import React from 'react';
import config from '../../config';
export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-road"></span>
      <h1>{config.heading}</h1>
      <h3>{config.subHeading}</h3>
      <p>{config.subSubHeading}</p>
    </div>
  );
}
