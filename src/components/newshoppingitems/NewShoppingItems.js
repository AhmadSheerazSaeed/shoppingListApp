import React, { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../addordeletecategories/CategoryContext";
import NewShoppingItemsCSS from "./NewShoppingItems.module.css";

function NewShoppingItems() {
  const { categories } = useContext(CategoryContext);

  // const [selectOptionValue, setSelectOptionValue] = useState("");
  let selectOptionValue = "";

  if (categories.length > 0) {
    selectOptionValue = categories[0];
  }

  function handleSelectChange(e) {
    console.log(e.target.value);
    // console.log(selectOptionValue);
  }

  return (
    <div className={NewShoppingItemsCSS.wrapperDiv}>
      <h1>Add Items To Buy</h1>

      <section
        name="selectCategory"
        className={NewShoppingItemsCSS.selectCategory}
      >
        {categories.length > 0 ? (
          <label>
            Select Categorty
            <select value={selectOptionValue} onChange={handleSelectChange}>
              {categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h4>
            Please add categories <br />
            in the menu
          </h4>
        )}
      </section>
    </div>
  );
}

export default NewShoppingItems;
