import logo from "./logo.svg";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from "./components/home/header";
import Homepage from "./components/home";
import Footer from "./components/home/footer";
import NormalLoginForm from "./components/users/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from "./components/users/register";
import Category from "./components/products/category";
import ProductDetail from "./components/products/productDetail";
import NotFound404 from "./components/notFound404";
import List from "./components/news/list";
import AboutUs from "./components/aboutUs";
import Shop from "./components/products/shop";
import Cart from "./components/cart/cart";
import DetailBlog from "./components/news/detail";
import Search from "./components/search";

function App() {
  return (
    <>
      <Home></Home>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/account/login" element={<NormalLoginForm></NormalLoginForm>}></Route>
          <Route path="/account/register" element={<RegistrationForm></RegistrationForm>}></Route>
          <Route path="/category/:categoryId" element={<Category></Category>}></Route>
          <Route path="/products/:productId" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/news" element={<List></List>}></Route>
          <Route path="/news/:newid" element={<DetailBlog></DetailBlog>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Cart></Cart>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>

          <Route path="/*" element={<NotFound404></NotFound404>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
