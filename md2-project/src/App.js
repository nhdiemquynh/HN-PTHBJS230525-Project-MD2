import logo from "./logo.svg";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from "./components/home/header";
import Container from "./components/home/container";
import Footer from "./components/home/footer";

function App() {
  return (
    <>
      <Home />
      <Container/>
      <Footer/>
    </>
  );
}

export default App;
