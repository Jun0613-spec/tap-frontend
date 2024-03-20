import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/layout";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import AuthCallback from "./pages/AuthCallback";
import ProtectedRoute from "./pages/ProtectedRoute";
import ManageRestaurant from "./pages/ManageRestaurant";
import Search from "./pages/Search";
import RestaurantDetail from "./pages/RestaurantDetail";
import OrderStatus from "./pages/OrderStatus";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />

      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <Search />
          </Layout>
        }
      />

      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <RestaurantDetail />
          </Layout>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatus />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurant />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
