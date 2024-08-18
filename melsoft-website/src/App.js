import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Bag from "../src/pages/bag";
import ProductList from "./pages/ProductList";
import Itemview from "./pages/Itemview";

function App() {
  return (
    <div className="App home-page">
      <ProductList />
      <Bag />
      <Itemview />
    </div>
  );
}

export default App;
