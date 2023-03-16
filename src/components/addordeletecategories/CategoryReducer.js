// CategoryContext.js calls this reducer function
export function categoryReducer(state, action) {
  switch (action.type) {
    // set the category from the local storage in useEffect in CategoryContext.js
    case "getCategory": {
      return action.payload;
    }
    // add new category and also checks that the category already exist or not
    // or if the payload is empty, after all the checking the new category adds
    // to local storage
    case "addNewCategory": {
      if (action.payload === "") {
        alert("Please enter the category!");
        return state;
      } else if (state.includes(action.payload)) {
        alert("Category already exist!");
        return state;
      } else {
        return [...state, action.payload.toLowerCase()];
      }
    }

    case "deleteCategory": {
      const filteredState = state.filter((elem) => elem !== action.payload);
      return filteredState;
    }
  }
}
