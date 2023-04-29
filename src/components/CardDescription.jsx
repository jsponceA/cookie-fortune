import React from "react";
import PropTypes from "prop-types";

const CardDescription = ({ phrase }) => {
  return (
    <div className="card">
      <p>{phrase}</p>
    </div>
  );
};

CardDescription.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default CardDescription;
