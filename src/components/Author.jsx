import React from "react";
import PropTypes from "prop-types";

const Author = ({ author }) => {
  return (
    <div className="author">
      <p>Fuente: {author}</p>
    </div>
  );
};

Author.propTypes = {
  author: PropTypes.string.isRequired,
};

export default Author;
