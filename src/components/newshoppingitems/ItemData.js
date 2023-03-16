const items = [
  { category: "fruits", items: ["apple", "banana", "oranges"] },
  { category: "dairy", items: ["milk", "butter"] },
];

// function myReducer(state, action) {
//   switch (action.type) {
//     case "ADD_ITEM":
//       const updatedItems = state.items.map((category) => {
//         if (category.category === action.payload.category) {
//           return {
//             ...category,
//             items: [...category.items, action.payload.item]
//           };
//         }
//         return category;
//       });
//       return {
//         ...state,
//         items: updatedItems
//       };
//     // other cases
//     default:
//       return state;
//   }
// }
