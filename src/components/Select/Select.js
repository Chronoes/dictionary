import React, { Component, PropTypes as Types } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import { Collection } from 'immutable';

import './Select.scss';

class Select extends Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.options.equals(this.props.options);
  }

  render() {
    const options = this.props.options.toJS();
    return <VirtualizedSelect {...this.props} options={options} filterOptions={createFilterOptions(options)} />;
  }
}

Select.propTypes = {
  options: Types.instanceOf(Collection.Indexed).isRequired,
};

export default Select;
