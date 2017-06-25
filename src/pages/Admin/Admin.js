import React, { PropTypes as Types } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collection, fromJS } from 'immutable';

import * as searchActions from '../../actions/searchActions';

import Search from '../../components/Search';
import WordForm from './WordForm';

function Admin({ search, actions, match }) {
  if (match.params.wordId) {
    return (
      <div className="container">
        <WordForm word={{}} languages={fromJS([{ langCode: 1, name: 'eesti' }, { langCode: 2, name: 'sörve' }])} />
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
  search: Types.instanceOf(Collection.Keyed).isRequired,
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
