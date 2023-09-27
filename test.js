function myAdd()
{
 var UserItem = document.getElementById("myInput").value;
 var LatestList = document.getElementById("newList");

 if(UserItem != "")
 {
    var NewChild = document.createElement("li");

    NewChild.innerHTML = UserItem + '  <button onclick="removeTask(this)">Remove</button>';
  LatestList.appendChild(NewChild);
  UserItem = "";
  document.getElementById("myInput").value= "";
 }
 else
 {
    window.alert("Add some thing to do vila ndini");
 }



UserItem = "";
document.getElementById("myInput").value= "";

}
function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}
