import React from "react";

import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} arget={target} className={"btn btn-primary" + classes}>
        {label}

        {icon ? (
          <span className="material-symbol-outlined" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary" + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.prototype = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export { ButtonPrimary };
