console.log("Script attached");

/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = 'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].textContent = 'I used the getElementByClassName("node2") method to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Tags = document.getElementsByTagName("h3");
for(let i=0; i < h3Tags.length; i++) {
  h3Tags[i].textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const e2Paragraph = document.createElement("p");
e2Paragraph.textContent = "This node was created using the createElement() method";
const e2Parent = document.getElementById("parent");
// TODO: Append the created node to the parent node using the element.appendChild() method
e2Parent.appendChild(e2Paragraph);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const e2Anchor = document.createElement("a");
e2Anchor.textContent = "I am a <a> tag";
// BONUS: Add a link href to the <a>
e2Anchor.href = "#";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
e2Parent.insertBefore(e2Anchor,e2Paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const e3OldChild = document.getElementById("N1");
const e3NewChild = document.createElement("p");
e3NewChild.textContent = "New Child Node";
e3OldChild.replaceWith(e3NewChild);
// TODO: Remove the "New Child Node"
e3NewChild.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

const e4Parent = document.getElementById("container");
// TODO: Create an unordered list element
const ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  // TODO: Append the new list items to the unordered list element
  ul.appendChild(li);
});
// TODO: Append the unordered list to the `div#container` under exercise 4 
e4Parent.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/
// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
function show() {
  let modal = document.createElement("div");
  let modalCard = document.createElement("div");
  let closeBtn = document.createElement("button");
  modal.id = "modal";

  modalCard.classList.add("modal-card");
  modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

  closeBtn.id = "close-btn";
  closeBtn.textContent = "X";
  // BONUS: The modal popup should be able to be closed. Refactor for this functionality
  // Close modal if outside of modal card or close button is clicked
  modal.addEventListener("click", (event) => {
    if(event.target == modal || event.target == closeBtn) {
      modal.remove();
    }
  })

  modalCard.append(closeBtn);
  modal.appendChild(modalCard);
  document.body.appendChild(modal);
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", show);