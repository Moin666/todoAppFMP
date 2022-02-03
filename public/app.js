var inputField = document.getElementById("inputField");
var listItem = document.getElementById("listItem");

function addTodo(){
    ///////Create li tag using DOM function */
    var todoLi = document.createElement('li');
    var inputTxtNode = document.createTextNode(inputField.value);
    todoLi.setAttribute('class','listStyle')
    todoLi.appendChild(inputTxtNode);

    ///////////////Create Del Button///////////////////
    var todoDel = document.createElement('btn');
    var inputTxtDel = document.createTextNode("Delete");

    todoDel.setAttribute('class','btnStyle')
    todoDel.appendChild(inputTxtDel);
    todoDel.setAttribute('onclick','deleteitems(this)')

      ///////////////Create Edit Button///////////////////
    var todoEdit = document.createElement('btn');
    var inputTxtEdit = document.createTextNode("Edit");
    todoEdit.setAttribute('class','btnStyle')
    todoEdit.setAttribute('onclick','editTodo(this)')
    todoEdit.appendChild(inputTxtEdit);
  
    todoLi.appendChild(todoDel);
    todoLi.appendChild(todoEdit);
  
    listItem.appendChild(todoLi)

    console.log(todoLi)
}

function editTodo(element){

    element.parentNode.firstChild.nodeValue = prompt("Enter New Value")
console.log("hello")

}





function deleteitems(element){
    element.parentNode.remove()

}








function delTodo(){
    
    listItem.innerHTML = ""
}