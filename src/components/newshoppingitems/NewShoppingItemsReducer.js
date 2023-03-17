export function itemReducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "GET_ITEMSTATE": {
      return action.payload;
    }

    case "ADD_ITEM": {
      //  if the input of item is empty
      if (action.payload.inputItem.trim() === "") {
        alert("PLease, enter the item");
        return state;
        //  this else is executed when the state has objects
      } else if (state.length > 0) {
        // find the category using array.find method
        const isCategoryExist = state.find((findCategory) => {
          return findCategory.category === action.payload.selectedCategory;
        });

        //  if array has categories object then this if will executed and
        //  store the item inside the category
        if (isCategoryExist) {
          // store the state in this variable except the selectedCategory
          const stateWithoutSelectedCategory = state.filter(
            (elements) => elements.category !== action.payload.selectedCategory
          );

          const updatedCategory = {
            category: isCategoryExist.category,
            items: [...isCategoryExist.items, action.payload.inputItem],
          };
          return [...stateWithoutSelectedCategory, updatedCategory];
          // if no category found then this else will execute
        } else {
          return [
            ...state,
            {
              category: action.payload.selectedCategory,
              items: [action.payload.inputItem],
            },
          ];
        }
        // return state;

        //  this else will run only once when the array will be created
      } else {
        return [
          ...state,
          {
            category: action.payload.selectedCategory,
            items: [action.payload.inputItem],
          },
        ];
      }

      //
    } // ADD_ITEM function
    case "DELETE_ITEM": {
      // console.log(action.payload.itemToDelete);
      // console.log(action.payload.categoryToDelete);

      // using array find method to search for the category whose
      // item to delete
      const filteredCategoryForItemDelete = state.find((elem) => {
        return elem.category === action.payload.categoryToDelete;
      });

      // filter the item from the item array
      const filteredItemArray = filteredCategoryForItemDelete.items.filter(
        (elem) => elem !== action.payload.itemToDelete
      );

      // using array filter method to filter the array except
      // the category inwhich item to delete
      const remaingCategoresArray = state.filter((elem) => {
        return elem.category !== action.payload.categoryToDelete;
      });

      // check if the length of the item array is more than 0 then
      // the category and items will be added else if item array is
      // 0 then category and item empty array will not be added
      if (filteredItemArray.length > 0) {
        const finalFilteredState = [
          ...remaingCategoresArray,
          {
            category: action.payload.categoryToDelete,
            items: filteredItemArray,
          },
        ];
        // console.log("finalFilteredState : ", finalFilteredState);
        return finalFilteredState;
      } else {
        return remaingCategoresArray;
        console.log(remaingCategoresArray);
      }

      // using array filter method to get all the data
      // console.log(
      //   "filteredCategoryForItemDelete : ",
      //   filteredCategoryForItemDelete
      // );
      // console.log("remaingCategoresArray : ", remaingCategoresArray);
      // console.log("filteredItemArray : ", filteredItemArray);

      // return it until return state will be ok
      // return state;
    }
  } // switch statement
} // reducer function
