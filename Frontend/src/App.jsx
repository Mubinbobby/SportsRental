import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminFeatures from "./pages/admin-view/Features";
import RentLayout from "./components/renting-view/Layout";
import NotFound from "./pages/not-found/Index";
import RentHome from "./pages/renting-view/Home";
import RentList from "./pages/renting-view/Listing";
import RentCheckout from "./pages/renting-view/Checkout";
import RentAccount from "./pages/renting-view/Accountpage";
import CheckAuth from "./components/common/Check-auth";
import Unauth from "./pages/unauth-page/Index";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import { useEffect } from "react";
import { Skeleton } from "./components/ui/skeleton";

function App() {

  const { user, isAuthenticated, isLoading } = useSelector
    (state => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);
    

  return (
    
      <div className='flexflex-col overflow-hidden bg-white'>
    <Routes>
    <Route path="/" element={
        <CheckAuth isAuthenticated={isAuthenticated}
        user={user}
        ></CheckAuth>
      }/>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      }>
        <Route path="login" element={<AuthLogin/>}/>
        <Route path="register" element={<AuthRegister/>}/>
      </Route>

      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      }>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="orders" element={<AdminOrders/>}/>
        <Route path="features" element={<AdminFeatures/>}/>
      </Route>

      <Route path="/shop" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <RentLayout/>
        </CheckAuth>
      }>
        <Route path="home" element={<RentHome/>}/>
        <Route path="listing" element={<RentList/>}/>
        <Route path="checkout" element={<RentCheckout/>}/>
        <Route path="account" element={<RentAccount/>}/>
      </Route> 

      <Route path="/unauth-page" element={<Unauth/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </div>
    
  )
}

export default App
