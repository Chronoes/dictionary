import React, { PropTypes as Types } from 'react';
import { Link } from 'react-router-dom';

function ItemWrapper({ children, linkHref, extended }) {
  if (extended) {
    return (
      <Link className="list-group-item list-group-item-action" to={linkHref}>
        {children}
      </Link>
    );
  }
  return <li className="list-group-item">{children}</li>;
}

ItemWrapper.propTypes = {
  linkHref: Types.string.isRequired,
  children: Types.node.isRequired,
  extended: Types.bool.isRequired,
};

export default ItemWrapper;
