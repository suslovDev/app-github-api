import { Route, Routes } from "react-router-dom";
import General from "./General/General";
import HomePage from "./HomePage/HomePage";
import FavoritsPage from "./FavoritsPage/FavoritsPage";
import RequireAuth from "../components/hok/RequireAuth";
import Authorization from "./Authorization/Authorization";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path="/authorization" element={<Authorization />} />
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <FavoritsPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;
