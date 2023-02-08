import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarCompito from "./Components/MyNav";
import MyFooterCompito from "./Components/MyFooter";
import WelcomeCompito from "./Components/Welcome";
import CardsCompito from "./Components/CardsFantasy";

function App() {
  return (
    <div className="App">
      <>
        <NavbarCompito />
        <WelcomeCompito />
        <div class="row">
          <CardsCompito />
        </div>
        <MyFooterCompito />
      </>
    </div>
  );
}

export default App;
