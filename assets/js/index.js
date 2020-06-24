todoListItems = ["make the bed", "test task 1", "gay"]

for (var i in todoListItems) {
    var inputBoxValue = document.getElementById("add-input").value;
    console.log(inputBoxValue);

    var newListItem = document.createElement("div");

    newListItem.setAttribute("class", "list-item");

    var newListItemText = document.createElement("li");

    newListItemText.innerHTML = todoListItems[i];

    newListItemText.setAttribute("id", "list-item-text");

    newListItem.appendChild(newListItemText);

    var newListItemDelBtn = document.createElement("button");

    newListItemDelBtn.innerHTML = "delete";

    newListItemDelBtn.setAttribute("id", "list-item-del-btn");

    newListItem.appendChild(newListItemDelBtn);

    var list = document.getElementById("list");

    list.insertBefore(newListItem, list.lastChild);
}

document.getElementById("list-item-del-btn").addEventListener("click", function () {
    this.parentElement.remove();
});

/*
document.getElementById("add-btn").addEventListener("click", function () {
            var inputBoxValue = document.getElementById("add-input").value;
            console.log(inputBoxValue);

            var newListItem = document.createElement("div");

            newListItem.setAttribute("class", "list-item");

            var newListItemText = document.createElement("li");

            newListItem.setAttribute("id", "list-item-text");

            newListItem.appendChild(newListItemText);

            var newListItemDelBtn = document.createElement("button");

            newListItem.setAttribute("id", "list-item-del-btn");

            newListItem.appendChild(newListItemDelBtn);

            var list = document.getElementById("list");

            list.insertBefore(newListItem, list.lastChild);
        });
        */