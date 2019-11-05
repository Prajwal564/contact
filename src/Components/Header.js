import React from "react";
import PropTypes from "prop-types";

const header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

header.defaultProps = {
  title: "My App"
};
header.propTypes = {
  title: PropTypes.string.isRequired
};

export default header;
