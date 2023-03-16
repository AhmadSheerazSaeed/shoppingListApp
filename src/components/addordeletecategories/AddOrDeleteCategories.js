import React, { useReducer, useState } from "react";
import { useContext } from "react";
import AddOrDeleteCategoriesCSS from "./AddOrDeleteCategories.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { CategoryContext } from "./CategoryContext";

function AddOrDeleteCategories() {
  // store the category enter by the user
  const [categoryInput, setCategoryInput] = useState("");

  // get the categoryState and dispatch from the categoryContext.js
  const { categoryState, dispatch } = useContext(CategoryContext);

  // function to add new category in the categoryReducer
  const addNewCategoryfunc = (e) => {
    dispatch({ type: "addNewCategory", payload: categoryInput });
    setCategoryInput("");
  };

  // function to delete the category in the categoryReducer
  const deleteCategory = (category) => {
    dispatch({ type: "deleteCategory", payload: category });
  };

  return (
    <section className="categorySection">
      <h1>Add or Delete Categories</h1>
      <section className={AddOrDeleteCategoriesCSS.inputSection}>
        <input
          autoFocus
          name="categoryInput"
          value={categoryInput}
          type="text"
          placeholder="Enter Category"
          onChange={(e) => setCategoryInput(e.target.value)}
        />
        <button onClick={addNewCategoryfunc}>Add</button>
      </section>
      {
        <section className={AddOrDeleteCategoriesCSS.allCategoryDisplaySection}>
          {/*  <section className="singleCategoryDisplayWithDeleteButton">
          <p>Fruits</p>
          <AiOutlineDelete type="button" className="deleteIconCategory" />
        </section> */}

          {categoryState.length > 0 ? (
            categoryState.map((category, i) => (
              <section
                key={i}
                className={
                  AddOrDeleteCategoriesCSS.singleCategoryDisplayWithDeleteButton
                }
              >
                <p>
                  {category.substring(0, 1).toUpperCase()}
                  {category.substring(1)}
                </p>

                <AiOutlineDelete
                  type="button"
                  className={AddOrDeleteCategoriesCSS.deleteIconCategory}
                  onClick={() => deleteCategory(category)}
                />
              </section>
            ))
          ) : (
            <h2>No Category Exist!</h2>
          )}
        </section>
      }
    </section>
  );
}

export default AddOrDeleteCategories;
