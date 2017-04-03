import { fromJS as immutableJS, List } from 'immutable';

const wordFormat = immutableJS({
  wordId: 0,
  word: '',
  description: '',
  translation: '',
  example: '',
});

const searchState = immutableJS({
  results: [],
  form: {
    searchBox: '',
    loading: false,
  },
});

export default function search(state = searchState, { type, ...action }) {
  switch (type) {
    case 'SET_SEARCH_FORM_VALUE':
      return state.setIn(['form', action.key], action.value);
    case 'SEND_SEARCH_FORM':
      return state.setIn(['form', 'loading'], true);
    case 'SEND_SEARCH_FORM_SUCCESS':
      return state.setIn(['form', 'loading'], false)
      .set('results', new List(action.results).map((word) => wordFormat.merge(word)));
    default:
      return state;
  }
}
