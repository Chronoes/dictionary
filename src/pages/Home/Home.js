import React, { PropTypes as Types } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import * as searchActions from '../../actions/searchActions';

import Search from './Search';

function Home({ search, actions }) {
  return (
    <div className="container">
      <h1>Sõnastiku otsing</h1>
      <Search results={search.get('results')} form={search.get('form')} actions={actions.search} />
    </div>
  );
}

Home.propTypes = {
  search: Types.instanceOf(Map).isRequired,
  actions: Types.shape({
    search: Types.objectOf(Types.func),
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(searchActions, dispatch),
    },
  };
}

export default connect((state) => state, mapDispatchToProps)(Home);
