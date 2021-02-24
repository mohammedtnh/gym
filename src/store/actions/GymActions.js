import * as types from "./actionTypes";
import instance from "./instance";

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("gyms");
      dispatch({
        type: types.FETCH_GYMS,
        payload: { gyms: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};

export const createGym = (newGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newGym) formData.append(key, newGym[key]);

      const res = await instance.post(`gyms`, formData);
      dispatch({
        type: types.CREATE_GYM,
        payload: { newGym: res.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};
