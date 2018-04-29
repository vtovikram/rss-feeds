import { callApi } from '../api';
export const INCREMENT_REQUESTED = 'actions/INCREMENT_REQUESTED';
export const INCREMENT = 'actions/INCREMENT';
export const SET_VIEWING_FEED = 'actions/SET_VIEWING_FEED';
export const ADD_TO_BOOKMARKS = 'actions/ADD_TO_BOOKMARKS'


const initialState = {
  backchannel: undefined,
  isIncrementing: false,
  viewingFeedDetails: undefined,
  bookmarks: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        backchannel: action.response,
        isIncrementing: !state.isIncrementing
      };

    case SET_VIEWING_FEED:
      return {
        ...state,
        viewingFeedDetails: action.viewingFeedDetails
      };
    case ADD_TO_BOOKMARKS:
    const bookmarks = state.bookmarks;
    bookmarks.push(action.bookmarks);
    return {
      ...state,
      bookmarks: bookmarks
    };

    default:
      return state;
  }
};

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });
    callApi()
     .then(res => {
       var parser, xmlDoc;
       parser = new DOMParser();
       xmlDoc = parser.parseFromString(res.backchannel,"text/xml");
       var result = xmlDoc.getElementsByTagName("item");
       dispatch({
         type: INCREMENT,
         response: result
       });
     })
     .catch(err => console.log(err));

  };
};

export const setViewFeed = (viewingFeedDetails) => {
  return dispatch => {
    dispatch({
      type: SET_VIEWING_FEED,
      viewingFeedDetails: viewingFeedDetails
    });
  };
};

export const addToBookmarks = (bookmarks) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_BOOKMARKS,
      bookmarks: bookmarks
    });
  };
};
