import ClassList from "./class/ClassList";
// import ClassDetail from "./ClassDetails";
import GymForm from "./gym/GymForm";
import ClassForm from "./class/ClassForm";
import { Route, Switch } from "react-router";
import GymDetail from "./gym/GymDetail";
import GymList from "./gym/GymList";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import Signin from "./Signin";
const Routes = () => {
  const classes = useSelector((state) => state.classReducer.classes);

  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/gyms/new">
        <GymForm />
      </Route>
      <Route path="/gyms/:gymId/classes/new">
        <ClassForm />
      </Route>
      <Route path="/classes">
        <ClassList classes={classes} />
      </Route>
      <Route path="/gyms/:gymId">
        <GymDetail />
      </Route>
      {/* <Route
        path={["/gyms/:gymId/classes/new", "/classes/:productSlug/edit"]}
      >
        <GymForm />
      </Route>
      <Route path="/classes/:productSlug">
        <ClassDetail />
      </Route>
  */}
      <Route path="/gyms">
        <GymList />
      </Route>
      <Route path="/">
        <></>
      </Route>
    </Switch>
  );
};

export default Routes;
