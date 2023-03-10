import "./App.css";
import Header from "./components/header/Header";
import NewShoppingItems from "./components/newshoppingitems/NewShoppingItems";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddOrDeleteCategories from "./components/addordeletecategories/AddOrDeleteCategories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <section className="routesInApp">
          <Routes>
            <Route path="/" element={<NewShoppingItems />} />
            <Route
              path="/addordeletecategories"
              element={<AddOrDeleteCategories />}
            />
          </Routes>
        </section>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
