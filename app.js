 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
 import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use


  const firebaseConfig = {
    apiKey: "AIzaSyC7s0_c_rj3KUjbvstrXedcW-QBozvhtUE",
    authDomain: "todoapp-f6e8d.firebaseapp.com",
    projectId: "todoapp-f6e8d",
    storageBucket: "todoapp-f6e8d.appspot.com",
    messagingSenderId: "560957689715",
    appId: "1:560957689715:web:420e0ddd79bca48e01ff06",
    measurementId: "G-6KP6HN6CZ0"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();
 
 var inputField = document.getElementById("inputField");
 var listItem = document.getElementById("listItem");

 var todoData = {

    }

function databaseSend(){
    const objKey = push(ref(db, 'todo')).key;
    todoData.key = objKey;
    todoData.data  = inputField.value;
    const referenceData = ref(db,'todo/'+todoData.key)
    set(referenceData,todoData);
}

window.getData =  function(){
    const dbRef = ref(db,'todo');
    onValue(dbRef, (snapshot) => {
    console.log(snapshot.val())
    snapshot.forEach((childSnapshot) => {
    console.log(childSnapshot.val().data)

    var todoLi = document.createElement('li');
    var inputTxtNode = document.createTextNode(childSnapshot.val().data);
    todoLi.setAttribute('class','listStyle')
    todoLi.appendChild(inputTxtNode); 

    ///////////////Create Del Button///////////////////
    var todoDel = document.createElement('button');
    var inputTxtDel = document.createTextNode("Delete");
    todoDel.setAttribute('class','btnStyle')
    todoDel.appendChild(inputTxtDel);
    todoDel.setAttribute('onclick','deleteitems(this)')
      ///////////////Create Edit Button///////////////////
    var todoEdit = document.createElement('button');
    var inputTxtEdit = document.createTextNode("Edit");
    todoEdit.setAttribute('class','btnStyle')
    todoEdit.setAttribute('onclick','editTodo(this)')
    todoEdit.appendChild(inputTxtEdit);
    todoLi.appendChild(todoDel);
    todoLi.appendChild(todoEdit);
    listItem.appendChild(todoLi)
  });
}, 
{
  onlyOnce: false
});
}

window.addTodo =  function(){
    ///////Create li tag using DOM function */
    databaseSend()
    var todoLi = document.createElement('li');
    var inputTxtNode = document.createTextNode(inputField.value);
    todoLi.setAttribute('class','listStyle')
    todoLi.appendChild(inputTxtNode); 

    ///////////////Create Del Button///////////////////
    var todoDel = document.createElement('button');
    var inputTxtDel = document.createTextNode("Delete");
    todoDel.setAttribute('class','btnStyle')
    todoDel.appendChild(inputTxtDel);
    todoDel.setAttribute('onclick','deleteitems(this)')
      ///////////////Create Edit Button///////////////////
    var todoEdit = document.createElement('button');
    var inputTxtEdit = document.createTextNode("Edit");
    todoEdit.setAttribute('class','btnStyle')
    todoEdit.setAttribute('onclick','editTodo(this)')
    todoEdit.appendChild(inputTxtEdit);
    todoLi.appendChild(todoDel);
    todoLi.appendChild(todoEdit);
    listItem.appendChild(todoLi)
    console.log(todoLi)
}

window.editTodo =  function(element){

    element.parentNode.firstChild.nodeValue = prompt("Enter New Value")
console.log("hello")
}

window.deleteitems =  function(element){
    element.parentNode.remove()
}
window.delTodo =  function(){
    listItem.innerHTML = ""
}

function deleteFirebaseData(){
    remove(ref(db, 'todo'))
    alert("Successfully Removed All Data From Firebase Database")
    delTodo()
}

window.delTodofirebase = function(){
    deleteFirebaseData()

}