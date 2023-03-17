import React, { useEffect, useState, useContext } from "react";
import TimeCategoryItemCountCSS from "./TimeCategoryItemCount.module.css";
// import { CategoryContext } from "../../addordeletecategories/CategoryContext";
import { NewShoppingItemsContext } from "../../newshoppingitems/NewShoppingItemsContext";

function TimeCategoryItemCount() {
  const [currentTime, setCurrentTime] = useState(new Date());
  // const { categoryState } = useContext(CategoryContext);
  const { itemState, dispatch } = useContext(NewShoppingItemsContext);

  // total categories to display after the date and time
  const totalCategories = itemState.length;

  // total items in all categories to display after the date and time
  let totalItems = 0;
  const totalItemsInCategories = itemState.map((elem) => {
    totalItems = totalItems + elem.items.length;
  });

  useEffect(() => {
    let localTimeChangeAfterOneSecond = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup of localTimeChangeAfterOneSecond
    return () => clearInterval(localTimeChangeAfterOneSecond);
  });

  return (
    <section className={TimeCategoryItemCountCSS.headerSection}>
      <section className={TimeCategoryItemCountCSS.timeDisplay}>
        <p>
          {`${currentTime.toLocaleTimeString()} on ${currentTime.toLocaleDateString()}`}
        </p>
        <p>
          {totalItems} {totalItems > 1 ? "items" : "item"} in {totalCategories}
          {totalCategories > 1 ? "catgories" : "catgory"}
        </p>
      </section>
    </section>
  );
}

export default TimeCategoryItemCount;
