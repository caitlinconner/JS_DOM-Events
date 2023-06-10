console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

const node1 =
document.getElementById("node1");

node1.textContent = "I used the getElementById('node1') method to access this";


let node2 = 
document.getElementsByClassName("node2")[0];
 
node2.textContent = "I used the getElementsByClassName('node2') method to access this";


let h3 = 
document.getElementsByTagName('h3');

for (let ele of h3) {
    ele.textContent = "I used the getElementsByTagName('h3') method to access all of these";
};

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

let para = document.createElement("p");
para.textContent = "This node was created using the createElement() method.";
let parent = document.querySelector("#parent");
parent.appendChild(para);

let newTag = document.createElement("a");
newTag.textContent = "Visit me.";
newTag.href = "https://google.com";
newTag.target = "_blank";//means link will open in a new tab
parent.insertBefore(newTag, para);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// TODO: Remove the "New Child Node"

let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";
exercise3Container.replaceChild(newChildNode, oldChild);
exercise3Container.removeChild(newChildNode);

// setTimeout(() => {
//     exercise3Container.removeChild(newChildNode);
// }, 5000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];
// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    // TODO: Append the new list items to the unordered list element
    ul.appendChild(li);
    // TODO: Append the unordered list to the `div#container` under exercise 4 
});
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show() {
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button");

    //add content to the modalCard
    h2.textContent = "Modal Header";
    p.textContent = "Modal content blah blah read me";
    closeBtn.textContent = "Close";

    //add an event listener to the closeBtn that removes the modal container from the body
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modalContainer);
    });

    modalCard.append(h2, p, closeBtn);
    modalCard.classList.add("modal-card");

    //add the modalCard to the modal
    modalContainer.id = "modal";
    modalContainer.appendChild(modalCard);

   //add the modal to the body
    document.body.appendChild(modalContainer);
};

let button = document.querySelector("#btn");
button.addEventListener("click", show);



// This div should be a 'modal' that covers the main content on the screen

// BONUS: The modal popup should be able to be closed. Refactor for this functionality
