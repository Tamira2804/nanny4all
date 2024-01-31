import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "GlobalStyles";
// import { PrivateRoute } from "../PrivateRoute";
// import { RestrictedRoute } from "../RestrictedRoute";
import Home from "pages/Home";
import Nannies from "pages/Nannies/Nannies";
// import Favorites from "components/pages/Favorites";
import SharedLayout from "components/SharedLayout/SharedLayout";
import NannyReviews from "components/NannyReviews/NannyReviews";

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
          {/* <Route path="/favorites" element={<Favorites />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
