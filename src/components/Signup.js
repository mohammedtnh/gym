import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          Signup
        </button>
      </form>
    </>
  );
};

export default Signup;
