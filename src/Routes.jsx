import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import Loader from "./components/Loader/Loader.jsx";
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const RentPage = lazy(() => import("./pages/RentPage.jsx"));
const FavoritePage = lazy(() => import("./pages/FavoritePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={
                <MainPage />
            }
          />
          <Route
            path="/catalog/:page"
            element={
                <RentPage />
            }
                  />
           <Route
            path="/favorite/:page"
            element={
                <FavoritePage />
            }
          /> 
          <Route
            path="*"
            element={
                <NotFoundPage />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;