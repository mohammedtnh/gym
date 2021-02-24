import * as types from "./actionTypes";
import instance from "./instance";

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/classes");
      dispatch({
        type: types.FETCH_CLASSES,
        payload: { classes: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};

export const createClass = (newClass) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newClass) formData.append(key, newClass[key]);

      console.log("ppppppppppppppppppp", newClass);
      const res = await instance.post(
        `/gyms/${newClass.GymId}/classes`,
        formData
      );
      dispatch({
        type: types.CREATE_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};
