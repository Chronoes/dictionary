import React, { PropTypes as Types } from 'react';
import { Map, List } from 'immutable';

function onSubmit(handleSubmit, form) {
  return (event) => {
    event.preventDefault();
    handleSubmit(form);
  };
}

function Search({ results, form, actions: { updateSearchForm, sendSearchForm } }) {
  return (
    <div className="search-container">
      <form onSubmit={onSubmit(sendSearchForm, form)}>
        <input
          type="text"
          className="form-control"
          value={form.searchBox}
          onChange={(event) => updateSearchForm('searchBox', event.target.value)} />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Sõna &gt; Tähendus</th>
            <th>Kirjeldus</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ wordId, word, translation, description }) => (
            <tr key={wordId}>
              <td>{word} &gt; <span className="text-success">{translation}</span></td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Search.propTypes = {
  results: Types.instanceOf(List).isRequired,
  form: Types.instanceOf(Map).isRequired,
  actions: Types.objectOf(Types.func).isRequired,
};


export default Search;
