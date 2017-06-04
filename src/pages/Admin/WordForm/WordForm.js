import React, { Component, PropTypes as Types } from 'react';

class WordForm extends Component {
  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { word } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset className="form-group">
          <label htmlFor="word">Sõna</label>
          <input type="text" id="word" className="form-control" value={word.word} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-translation">Tõlge</label>
          <input type="text" id="word-translation" className="form-control" value={word.translation} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-language">Keel</label>
          <input type="text" id="word-language" className="form-control" value={word.language} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-type">Tüüp</label>
          <input type="text" id="word-type" className="form-control" value={word.type} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-theme">Teema</label>
          <input type="text" id="word-theme" className="form-control" value={word.theme} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-pronounciation">Hääldus</label>
          <input type="text" id="word-pronounciation" className="form-control" value={word.pronounciation} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-declension">Käänded</label>
          <input type="text" id="word-declension" className="form-control" value={word.declension} />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-example">Näitelause</label>
          <textarea id="word-example" className="form-control">{word.example}</textarea>
          <small>Seda lauset kasutab veel 5 teist sõna</small>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-description">Kirjeldus</label>
          <textarea id="word-description" className="form-control">{word.description}</textarea>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="word-sources">Allikad</label>
          <textarea id="word-sources" className="form-control">{word.sources}</textarea>
        </fieldset>
        <button type="submit" className="btn btn-block btn-primary">Salvesta</button>
      </form>
    );
  }
}

WordForm.propTypes = {
  word: Types.object.isRequired,
};

export default WordForm;
