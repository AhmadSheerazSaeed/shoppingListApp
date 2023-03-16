import { createContext, useEffect, useReducer } from "react";
import { categoryReducer } from "./CategoryReducer";

export const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  let [categoryState, dispatch] = useReducer(categoryReducer, []);

  // this useEffect will get the data from local storage on first render
  // and set the state by calling the dispatch
  useEffect(() => {
    const categoriesFromLocalStorage = JSON.parse(
      localStorage.getItem("category")
    );

    if (categoriesFromLocalStorage !== null) {
      dispatch({ type: "getCategory", payload: categoriesFromLocalStorage });
    }
  }, []);

  // this useEffect will store data to local storage
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoryState));
  }, [categoryState]);

  return (
    <CategoryContext.Provider value={{ categoryState, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
