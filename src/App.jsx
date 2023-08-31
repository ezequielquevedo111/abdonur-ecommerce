import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import FooterContainer from "./components/layout/footer/FooterContainer";
// import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import AppRouter from "./components/routes/AppRouter";

function App() {
  return (
    // <div>
    //   <NavbarContainer />
    //   <h1>Abdonur Ecommerce</h1>
    //   <FooterContainer />
    // </div>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
