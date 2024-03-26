import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import store from './store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/index/search/:keyword' element={<HomeScreen />} />
      <Route path='/index/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/index/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
      <Route path='/index/product/:id' element={<ProductScreen />} />
      <Route path='/index/cart' element={<CartScreen />} />
      <Route path='/index/login' element={<LoginScreen />} />
      <Route path='/index/register' element={<RegisterScreen />} />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/index/shipping' element={<ShippingScreen />} />
        <Route path='/index/payment' element={<PaymentScreen />} />
        <Route path='/index/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/index/order/:id' element={<OrderScreen />} />
        <Route path='/index/profile' element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}>
        <Route path='/index/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/index/admin/productlist' element={<ProductListScreen />} />
        <Route
          path='/index/admin/productlist/:pageNumber'
          element={<ProductListScreen />}
        />
        <Route path='/index/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/index/admin/userlist' element={<UserListScreen />} />
        <Route path='/index/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
