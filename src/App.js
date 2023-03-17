import "./App.css";
import Header from "./components/header/Header";
import NewShoppingItems from "./components/newshoppingitems/NewShoppingItems";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddOrDeleteCategories from "./components/addordeletecategories/AddOrDeleteCategories";
import CategoryContextProvider from "./components/addordeletecategories/CategoryContext";
import NewShoppingItemsContextProvider from "./components/newshoppingitems/NewShoppingItemsContext";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <CategoryContextProvider>
      <NewShoppingItemsContextProvider>
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
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </section>
          </BrowserRouter>
          <Footer />
        </div>
      </NewShoppingItemsContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
