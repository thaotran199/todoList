var input = document.getElementById("input");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");
var deleteBtn = document.getElementById("deleteBtn");


function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute("class", "list-group-item list-group-item-action list-group-item-success");
    li.addEventListener("click", toggle);
    ul.appendChild(li);
    input.value = "";

    var img = document.createElement("img");
    var id = document.createElement("id");
    img.src = "trashbin.png";
    img.setAttribute("class", "trashLogo");
    img.addEventListener("click", deleteItem);
    li.appendChild(img);

}

function clickEvent() {
    if (input.value.length > 0) {

        createList()
    }
}
function pressEvent(event) {
    if (event.key == "Enter" && input.value.length > 0) {
        createList();
    }
}

//-------------------------------------------
//ADD ITEM
addBtn.addEventListener("click", clickEvent);
input.addEventListener("keypress", pressEvent);

//-------------------------------------------
//DELETE ALL LIST ITEMS
deleteBtn.addEventListener("click", function () {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})


//-------------------------------------------
//DONE ITEMS
var list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", toggle);
}
function toggle() {
    this.classList.toggle("done");
}

//-------------------------------------------
//REMOVE ITEMS
var removeList = document.getElementsByTagName("img");
for (var i = 0; i < removeList.length; i++) {
    removeList[i].addEventListener("click", deleteItem);
}
function deleteItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}















