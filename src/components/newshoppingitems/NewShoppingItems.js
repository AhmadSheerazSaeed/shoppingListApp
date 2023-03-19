import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CategoryContext } from "../addordeletecategories/CategoryContext";
import NewShoppingItemsCSS from "./NewShoppingItems.module.css";
import { NewShoppingItemsContext } from "./NewShoppingItemsContext";
import { MdOutlineDeleteSweep } from "react-icons/md";

function NewShoppingItems() {
  // categories from the category context saved in local storage
  const { categoryState } = useContext(CategoryContext);

  const { itemState, dispatch } = useContext(NewShoppingItemsContext);

  // on first render stores the first category in the categoryState
  // and after stores the selected category from the drop down
  const [selectedCategory, setSelectedCategory] = useState();

  //  store the item from the input
  const [inputItem, setInputItem] = useState("");

  // function to handle and store the selected category from the drop down
  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  // function to set input item state
  const handleItemInput = (e) => {
    setInputItem(e.target.value);
  };

  // function to handle add item button
  const addItemBtn = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: { selectedCategory, inputItem } });
    setInputItem("");
  };

  // function to delete the item
  const handleItemDelete = (itemToDelete, categoryToDelete) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { itemToDelete, categoryToDelete },
    });
    // console.log(itemToDelete, categoryToDelete);
  };

  // store the first category in the categoryState
  useEffect(() => {
    setSelectedCategory(categoryState[0]);
  }, [categoryState]);

  // console.log(itemState);
  // const sortedItemState = itemState.sort((a, b) =>
  //   a.category.localeCompare(b.category)
  // );
  // console.log(sortedItemState);

  if (categoryState.length > 0) {
    return (
      <div className={NewShoppingItemsCSS.wrapperDiv}>
        <h1>Add Items To Buy</h1>

        <section
          name="selectCategory"
          className={NewShoppingItemsCSS.selectCategory}
        >
          <label>
            Select Category
            <select
              defaultValue={selectedCategory}
              onChange={handleCategorySelect}
            >
              {categoryState.map((elem, i) => (
                <option key={i}>{elem}</option>
              ))}
            </select>
          </label>
        </section>

        <section className={NewShoppingItemsCSS.inputItemSection}>
          <form>
            <input
              className={NewShoppingItemsCSS.newItemInput}
              value={inputItem}
              name="itemInput"
              type="text"
              placeholder="Enter Item, please"
              onChange={handleItemInput}
            />
            <button
              onClick={addItemBtn}
              className={NewShoppingItemsCSS.newItemAddBtn}
            >
              Add Item
            </button>
          </form>
        </section>

        <section
          className={NewShoppingItemsCSS.categoriesAndItemsDisplaySection}
        >
          {itemState.length > 0 ? (
            <section
              className={NewShoppingItemsCSS.dispayOneCategoryWithItemsSection}
            >
              {itemState
                .sort((a, b) => (a.category > b.category ? 1 : -1))
                .map((elemInItemState, i) => (
                  <div key={i} className={NewShoppingItemsCSS.categoryPTag}>
                    {/*elemInItemState.category*/}
                    <p className={NewShoppingItemsCSS.categoryHeading}>
                      {elemInItemState.category.substring(0, 1).toUpperCase()}
                      {elemInItemState.category.substring(1)}
                    </p>

                    {elemInItemState.items.length > 0
                      ? elemInItemState.items.map((elemInItems, i) => (
                          <section
                            key={i}
                            className={
                              NewShoppingItemsCSS.itemAndDeleteBtnSection
                            }
                          >
                            <p className={NewShoppingItemsCSS.itemPTag}>
                              {elemInItems.substring(0, 1).toUpperCase()}
                              {elemInItems.substring(1)}
                            </p>
                            <MdOutlineDeleteSweep
                              type="button"
                              onClick={() => {
                                handleItemDelete(
                                  elemInItems,
                                  elemInItemState.category
                                );
                              }}
                              className={NewShoppingItemsCSS.itemDeleteBtn}
                            />
                          </section>
                        ))
                      : null}
                  </div>
                ))}
              {/*            <p className={NewShoppingItemsCSS.categoryPTag}>Category</p>

              <section className={NewShoppingItemsCSS.itemAndDeleteBtnSection}>
                <p className={NewShoppingItemsCSS.itemPTag}>Items</p>
                <p className={NewShoppingItemsCSS.itemPTag}>X</p>
              </section>
              <section className={NewShoppingItemsCSS.itemAndDeleteBtnSection}>
                <p className={NewShoppingItemsCSS.itemPTag}>Items</p>
                <p className={NewShoppingItemsCSS.itemPTag}>X</p>
              </section>
              <section className={NewShoppingItemsCSS.itemAndDeleteBtnSection}>
                <p className={NewShoppingItemsCSS.itemPTag}>Items</p>
                <p className={NewShoppingItemsCSS.itemPTag}>X</p>
          </section>*/}
            </section>
          ) : (
            <h4>No Items To Display</h4>
          )}
        </section>
      </div>
    );
  } else {
    return (
      <h4>
        Please add categories <br />
        by choosing <br />
        Add or Delete Categories <br />
        from the menu
      </h4>
    );
  }
}

export default NewShoppingItems;

// {itemState.map((elemInItemState, i) => (
//   <p key={i} className={NewShoppingItemsCSS.categoryPTag}>
//     {elemInItemState.category}

//     {elemInItemState.items.length > 0
//       ? elemInItemState.items.map((elemInItems, i) => (
//           <p key={i}>{elemInItems}</p>
//         ))
//       : null}
//   </p>
// ))}
