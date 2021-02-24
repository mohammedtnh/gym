import * as types from "../actions/actionTypes";

const initialState = {
  gyms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };
    case types.CREATE_GYM:
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
      };
    default:
      return state;
  }
};

export default reducer;
