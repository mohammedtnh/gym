import * as types from "../actions/actionTypes";

const initialState = {
  classes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload.classes,
        loading: false,
      };
    case types.CREATE_CLASS:
      const { newClass } = action.payload;
      return {
        ...state,
        classes: [...state.classes, newClass],
      };
    default:
      return state;
  }
};

export default reducer;
