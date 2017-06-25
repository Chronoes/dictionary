import React, { Component, PropTypes as Types } from 'react';
import { Map, List } from 'immutable';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classNames from 'classnames';

import './Search.scss';

import ItemWrapper from './ItemWrapper';
import Loader from '../Loader';

class Search extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.actions.sendSearchForm(this.props.form);
  };

  onFormInputChange = event => {
    const { name, value } = event.target;
    this.props.actions.updateSearchForm(name, value);
  };

  renderItem = ({ word_id, type, word, pronounciation, declension, translation, description }) => {
    const { extended } = this.props;
    return (
      <ItemWrapper key={word_id} linkHref={`/admin/word/${word_id}`} extended={extended}>
        <section>
          <header className="word-header">
            <h5 className="word-title">{word}</h5>
            <aside className="word-pronounciation">{pronounciation}</aside>
          </header>
          <div className="word-type">{type}</div>
          {declension &&
            <section className="word-declension">
              <h6 className="word-declension-title">Võimalikud vormid</h6>
              {declension}
            </section>}
          <div className="word-translation">{translation}</div>
          <p className="word-description">{description}</p>
        </section>
        {extended &&
          <aside className="edit-controls">
            <button className="btn btn-sm btn-danger">Delete</button>
          </aside>}
      </ItemWrapper>
    );
  };

  renderResults() {
    const { results, form, extended } = this.props;
    const ItemContainer = extended ? 'nav' : 'ul';
    return (
      <article className="search-results">
        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={10} transitionLeaveTimeout={300}>
          {
            do {
              if (form.get('loading')) {
                <Loader key="loader" className="search-results-loader">Laeb</Loader>;
              } else if (results.length === 0) {
                <div key="no-results" className="bg-info">Tulemusi ei ole</div>;
              }
            }
          }
        </CSSTransitionGroup>
        <ItemContainer className={classNames('list-group', { loading: form.get('loading') })}>
          {results.map(this.renderItem)}
        </ItemContainer>
      </article>
    );
  }

  render() {
    const { form } = this.props;
    return (
      <main className="search-container">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="searchBox"
                name="searchBox"
                placeholder="Sõna..."
                value={form.get('searchBox')}
                onChange={this.onFormInputChange}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">Otsi</button>
            </div>
          </div>
        </form>
        {this.renderResults()}
      </main>
    );
  }
}

Search.propTypes = {
  results: Types.instanceOf(List).isRequired,
  form: Types.instanceOf(Map).isRequired,
  actions: Types.objectOf(Types.func).isRequired,
  extended: Types.bool,
};

Search.defaultProps = {
  extended: false,
};

export default Search;
