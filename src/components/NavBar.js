import { StyledLink, NavItem } from "../styles";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <StyledLink to="/" className="navbar-brand">
        <img
          src="https://image3.mouthshut.com/images/imagesp/925749446s.jpg"
          alt="logo"
        />
      </StyledLink>
      <div className="navbar-nav ml-auto">
        <NavItem exact to="/" className="nav-item">
          Home
        </NavItem>
        {user ? (
          <>
            <p>Welcome, {user.username}</p>

            <button
              onClick={() => dispatch(signout(history))}
              className="nav-item"
            >
              Signout
            </button>
          </>
        ) : (
          <>
            <NavItem to="/signup" className="nav-item">
              Signup
            </NavItem>
            <NavItem to="/signin" className="nav-item">
              Signin
            </NavItem>
          </>
        )}

        {user && (
          <>
            <NavItem to="/gyms" className="nav-item">
              Gyms
            </NavItem>
            <NavItem to="/classes" className="nav-item">
              Classes
            </NavItem>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
