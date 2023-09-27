function myAdd()
{
    var newList = document.getElementById("myInput");
    var newToDo = document.getElementById("newList");

    var li = document.createElement("li");

    li.innerHTML = newList.value;
    newToDo.appendChild(li);

    newList.value = "";


}