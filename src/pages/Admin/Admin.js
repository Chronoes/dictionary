import React, { PropTypes as Types } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import * as searchActions from '../../actions/searchActions';

import Search from '../../components/Search';
import WordForm from './WordForm';

function Admin({ search, actions, match }) {
  if (match.params.wordId) {
    return (
      <div className="container">
        <WordForm word={{}} />
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Sõnad</h1>
      <Search results={search.get('results')} form={search.get('form')} actions={actions.search} extended />
    </div>
  );
}

Admin.propTypes = {
  search: Types.instanceOf(Map).isRequired,
  actions: Types.shape({
    search: Types.objectOf(Types.func),
  }).isRequired,
  match: Types.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(searchActions, dispatch),
    },
  };
}

export default connect(state => state, mapDispatchToProps)(Admin);
