// import Home from "./Home";
// import ProductList from "./ProductList";
// import ProductDetail from "./ProductDetails";
import GymForm from "./gym/GymForm";
import { Route, Switch } from "react-router";
// import GymDetail from "./GymDetails";
import GymList from "./gym/GymList";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import Signin from "./Signin";
const Routes = () => {
  const user = useSelector((state) => state.authReducer.user);
  console.log(user);
  //   const products = useSelector((state) => state.productReducer.products);

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
      {/* <Route
        path={["/gyms/:gymId/products/new", "/products/:productSlug/edit"]}
      >
        <GymForm />
      </Route>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <ProductList products={products} />
      </Route>
      <Route path="/gyms/:gymSlug">
        <GymDetail />
      </Route> */}
      <Route path="/gyms">
        <GymList />
      </Route>
      <Route path="/">{/* <App /> */}</Route>
    </Switch>
  );
};

export default Routes;
