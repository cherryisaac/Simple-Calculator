// add pageTitle
  const pageTitle = "My Shopping List";

// add groceries
  const  groceries = ["apple", "orange", "banana", "milk", "bread", "eggs", "tuna", "ice cream", "pudding", "cereal"];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
  function setPageTitle() {
  const title = document.getElementById("title");
  title.innerText = "My Shopping List";
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
  function displayGroceries() {
    const list = document.querySelector(".shopping-list ul");
    for (let i = 0; i < groceries.length; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = groceries[i];
      list.insertAdjacentElement('beforeend', listItem);
    }
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  const listItem = document.querySelectorAll(".shopping-list ul li");
  listItem.forEach(element => {
    element.classList.add('completed');
  });
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
