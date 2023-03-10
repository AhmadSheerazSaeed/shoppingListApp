import React, { useEffect, useState, useContext } from "react";
import TimeCategoryItemCountCSS from "./TimeCategoryItemCount.module.css";
import { CategoryContext } from "../../addordeletecategories/CategoryContext";

function TimeCategoryItemCount() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { categories } = useContext(CategoryContext);

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
        <p>{`${categories.length}`}</p>
      </section>
    </section>
  );
}

export default TimeCategoryItemCount;
