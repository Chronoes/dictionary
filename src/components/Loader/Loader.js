import React, { PropTypes as Types } from 'react';
import classNames from 'classnames';

import './Loader.scss';

function Loader({ children, className, ...props }) {
  return (
    <div {...props} className={classNames('loader', className)}>
      {children}
    </div>
  );
}

Loader.defaultProps = {
  children: 'Loading...',
  className: '',
};

Loader.propTypes = {
  children: Types.node,
  className: Types.string,
};

export default Loader;
