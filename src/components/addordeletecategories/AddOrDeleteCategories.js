// add and remove categories

import React, { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "./CategoryContext";
import AddOrDeleteCategoriesCSS from "./AddOrDeleteCategories.module.css";
import { AiOutlineDelete } from "react-icons/ai";

function AddOrDeleteCategories() {
  const [categoryInput, setCategoryInput] = useState("");

  const { categories, setCategories, addNewCategory, deleteCategory } =
    useContext(CategoryContext);

  const addCategoryLocalFunc = () => {
    addNewCategory(categoryInput);
    setCategoryInput("");
  };

  return (
    <section className="categorySection">
      <h1>Add or Delete Categories</h1>
      <section className={AddOrDeleteCategoriesCSS.inputSection}>
        <input
          autoFocus
          value={categoryInput}
          type="text"
          placeholder="Enter Category"
          onChange={(e) => setCategoryInput(e.target.value)}
        />
        <button onClick={addCategoryLocalFunc}>Add</button>
      </section>

      <section className={AddOrDeleteCategoriesCSS.allCategoryDisplaySection}>
        {/*  <section className="singleCategoryDisplayWithDeleteButton">
          <p>Fruits</p>
          <AiOutlineDelete type="button" className="deleteIconCategory" />
        </section> */}
        {categories !== null && categories.length > 0 ? (
          categories.map((elem, i) => (
            <section
              key={i}
              className={
                AddOrDeleteCategoriesCSS.singleCategoryDisplayWithDeleteButton
              }
            >
              <p>
                {elem.substring(0, 1).toUpperCase()}
                {elem.substring(1)}
              </p>
              <AiOutlineDelete
                type="button"
                className="deleteIconCategory"
                onClick={() => deleteCategory(elem)}
              />
            </section>
          ))
        ) : (
          <h2>No Category Exist!</h2>
        )}
      </section>
    </section>
  );
}

export default AddOrDeleteCategories;
