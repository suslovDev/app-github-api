import { Route, Routes } from "react-router-dom";
import General from "./General/General";
import Authorization from "./Authorization/Authorization";
import HomePage from "./HomePage/HomePage";
import FavoritsPage from "./FavoritsPage/FavoritsPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritsPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;

/* import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<General />}>
                <PrivateRoute path='/favorites' element={<FavoritsPage />} />
                <Route path='/authorization' element={<Authorization />} />
                <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default Routing; */
