import { callApi } from '../api';
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';

const initialState = {
  count: 0,
  backchannel: undefined,
  isIncrementing: false
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
        count: state.count + 1,
        backchannel: action.response,
        isIncrementing: !state.isIncrementing
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
       dispatch({
         type: INCREMENT,
         response: res.backchannel
       });
     })
     .catch(err => console.log(err));

  };
};
