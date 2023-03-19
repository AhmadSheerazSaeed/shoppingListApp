import React from "react";
import HelpCSS from "./Help.module.css";

function Help() {
  return (
    <section className={HelpCSS.wrapper}>
      <h1>How to use the App</h1>

      <h3>About the App</h3>
      <p>
        The main purpose of this app is to save the shopping items inside
        different Categories. For example, if you want to buy tomatoes, ginger,
        potatoes. You have to enter these items in the vegetables category. If
        there are no categories and you try to enter the shopping items. You
        will be notified that that there are no categories and you have enter
        categories first to use the app.
      </p>

      <p>
        {" "}
        If you don't save the shopping list items in different categories then
        you have to create one general category to use the app.
      </p>

      <h3>Add Categories</h3>
      <p>
        To create different or one category, you have to click on the menu icon
        which is a plus + sign at the top right conrner of the app. From there
        you have to choose an option, Add Or Delete Categories.
      </p>

      <p>
        In there you have options to add the new category and delete the
        existing category by pressing the delete icon infront of all the
        categories.
      </p>

      <h3>Add New Items in the Shopping List</h3>
      <p>
        To add the buying items in the shopping list. You have to select Enter
        New Shopping Items from the menu which is the plus + sign at the top
        right conrner of the app.
      </p>

      <p>
        Here you have to first select the category and then you will be able to
        add the items. If you don't select any category from the drop down the
        first category will be selected by default
      </p>
    </section>
  );
}

export default Help;
