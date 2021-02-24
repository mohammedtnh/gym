import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

// Redux Actions
import { createClass } from "../../store/actions/ClassActions";

const ClassForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { gymId } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const [_class, setClass] = useState({
    gymId: gymId,
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setClass({ ..._class, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setClass({ ..._class, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createClass(_class));
    history.push("/classes");
  };

  if (user === null || user.userType !== "admin") return <Redirect to="/" />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Class</h1>
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
export default ClassForm;
