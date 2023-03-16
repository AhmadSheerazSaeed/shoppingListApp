import { createContext, useEffect, useReducer, useState } from "react";
import { itemReducer } from "./NewShoppingItemsReducer";

export const NewShoppingItemsContext = createContext();

function NewShoppingItemsContextProvider({ children }) {
  const [itemState, dispatch] = useReducer(itemReducer, []);

  // this useEffect will get the shopping list from local storage
  useEffect(() => {
    const shoppingItemsFromLocalStorage = JSON.parse(
      localStorage.getItem("shoppingItems")
    );

    if (shoppingItemsFromLocalStorage !== null) {
      dispatch({
        type: "GET_ITEMSTATE",
        payload: shoppingItemsFromLocalStorage,
      });
    }
  }, []);

  // this useEffect will save the shopping items data to local storage
  useEffect(() => {
    localStorage.setItem("shoppingItems", JSON.stringify(itemState));
  }, [itemState]);

  return (
    <NewShoppingItemsContext.Provider value={{ itemState, dispatch }}>
      {children}
    </NewShoppingItemsContext.Provider>
  );
}

export default NewShoppingItemsContextProvider;
