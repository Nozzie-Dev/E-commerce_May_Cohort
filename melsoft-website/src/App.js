import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Bag from "../src/pages/bag";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App home-page">
      <ProductList />
      <Bag />
    </div>
  );
}

export default App;
