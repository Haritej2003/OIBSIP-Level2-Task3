function addTask(){
  var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
  if(inputBox.value == '')
  {
    alert("Write a Task to Add")
  }
  else{
    let li = document.createElement("li")
    li.innerHTML= inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
   
  }
  inputBox.value='';
  listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "SPAN"){
     e.target.parentElement.remove();
   }
   else if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
   }
  },false);

}







