import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "GlobalStyles";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import Home from "components/pages/Home/Home";
import Nannies from "components/pages/Nannies/Nannies";
import Favorites from "components/pages/Favorites";
import SharedLayout from "components/SharedLayout/SharedLayout";
import NannyReviews from "components/NannyReviews/NannyReviews";
import RegisterPage from "components/pages/RegisterPage";
import LoginPage from "components/pages/LoginPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/nannies" element={<Nannies />}>
            <Route path="reviews" element={<NannyReviews />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
