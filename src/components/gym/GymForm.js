import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

// Redux Actions
import { createGym } from "../../store/actions/GymActions";

const GymForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [gym, setGym] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setGym({ ...gym, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createGym(gym));
    history.push("/gyms");
  };

  if (user === null || user.userType !== "admin") return <Redirect to="/" />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Gym</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          Create
        </button>
      </form>
    </>
  );
};
export default GymForm;
