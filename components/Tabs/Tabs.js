class TabLink {
  constructor(element) {
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    //console.log(this.element.dataset.tab);
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    //console.log(this.tabItem);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", this.select.bind(this));
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // The Array.from() method creates a new, shallow - copied Array instance from an array - like or iterable object.
    Array.from(links).forEach(function(link) {
      link.classList.remove("tabs-link-selected");
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(item) {
      item.classList.remove("tabs-item-selected");
    });
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll(".tabs-link");
links.forEach(function(tablink) {
  return new TabLink(tablink);
});
