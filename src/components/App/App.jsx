import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "GlobalStyles";
import Home from "components/pages/Home/Home";
import Nannies from "components/pages/Nannies";
import Favorites from "components/pages/Favorites";
import SharedLayout from "components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
