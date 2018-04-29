import { callApiBackchannel, callApiMatter, callApiEconomist } from '../api';
export const INCREMENT_REQUESTED = 'actions/INCREMENT_REQUESTED';
export const INCREMENT = 'actions/INCREMENT';
export const MEDIUM_MATTER_REQUESTED = 'actions/MEDIUM_MATTER_REQUESTED';
export const MEDIUM_MATTER = 'actions/MEDIUM_MATTER';
export const FETCH_ECONOMIST = 'actions/FETCH_ECONOMIST';
export const ECONOMIST_RECEIVED = 'actions/ECONOMIST_RECEIVED';

export const SET_VIEWING_FEED = 'actions/SET_VIEWING_FEED';
export const ADD_TO_BOOKMARKS = 'actions/ADD_TO_BOOKMARKS'


const initialState = {
  backchannel: undefined,
  medidumMatter: undefined,
  economist: undefined,
  isRequestingMediumMatter: false,
  fetchEconomist: false,
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
    case MEDIUM_MATTER_REQUESTED:
      return {
        ...state,
        isRequestingMediumMatter: true
      };

    case MEDIUM_MATTER:
      return {
        ...state,
        medidumMatter: action.response,
        isRequestingMediumMatter: !state.isRequestingMediumMatter
      };
    case FETCH_ECONOMIST:
      return {
        ...state,
        fetchEconomist: true
      };

    case ECONOMIST_RECEIVED:
      return {
        ...state,
        economist: action.response,
        fetchEconomist: !state.isRequestingMediumMatter
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
    callApiBackchannel()
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

export const mediumMatter = () => {
  return dispatch => {
    dispatch({
      type: MEDIUM_MATTER_REQUESTED
    });
    callApiMatter()
     .then(res => {
       var parser, xmlDoc;
       parser = new DOMParser();
       xmlDoc = parser.parseFromString(res.matter,"text/xml");
       var result = xmlDoc.getElementsByTagName("item");
       dispatch({
         type: MEDIUM_MATTER,
         response: result
       });
     })
     .catch(err => console.log(err));

  };
};
export const fetchEconomist = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ECONOMIST
    });
    callApiEconomist()
     .then(res => {
       var parser, xmlDoc;
       parser = new DOMParser();
       xmlDoc = parser.parseFromString(res.economist,"text/xml");
       var result = xmlDoc.getElementsByTagName("item");
       dispatch({
         type: ECONOMIST_RECEIVED,
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
