import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  let isCategoryExist = false;

  const addNewCategory = (newCategoryArg = "") => {
    // convert the entered category to lowercase before saving
    newCategoryArg = newCategoryArg.toLowerCase();

    if (newCategoryArg === "") {
      alert("Please, enter the category");
    }
    // check if the category already exist or not
    else if (
      // categories !== null &&
      newCategoryArg !== "" &&
      categories.length > 0
    ) {
      isCategoryExist = categories.some((elem) => elem === newCategoryArg);
      // console.log(isCategoryExist);
    }

    if (isCategoryExist) {
      alert("Categorty already exist!");
    }

    if (
      isCategoryExist === false &&
      newCategoryArg !== "" &&
      categories !== null
    ) {
      const newArr = [...categories, newCategoryArg];
      setCategories(newArr);
    }
  };

  // function to delete the category
  function deleteCategory(categoryToDelete) {
    const newCategoryList = categories.filter(
      (elem) => elem !== categoryToDelete
    );

    setCategories(newCategoryList);
  }

  // get data from local storage on initial render
  useEffect(() => {
    const categoriesFromLocalStorage = JSON.parse(
      localStorage.getItem("categories")
    );

    // console.log("from local storage : ", categoriesFromLocalStorage);
    if (categoriesFromLocalStorage === null) {
      setCategories([]);
    } else {
      setCategories(categoriesFromLocalStorage);
    }
  }, []);

  // store data to local storage on every render
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, addNewCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
