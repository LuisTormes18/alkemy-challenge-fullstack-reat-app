import { Route, Redirect } from "react-router-dom";
import useAuth from './../Hooks/useAuth';


export default function PrivateRoute({ component: Component, ...rest }) {
const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.isLogged() ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}
