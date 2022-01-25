//console.log("checking Js file working or not");

//Constructor
function Book(title, author, type) {
  this.title = title;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototype
Display.prototype.add = function(book){
    console.log("Adding to UI");
    tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                      <td>${book.title}</td>
                      <td>${book.author} </td>
                      <td>${book.type}</td>
    
                   </tr>`;
     tableBody.innerHTML += uiString;           
};

//Implement the validate function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

//Impement the validate function
Display.prototype.validate = function(book){
  if(book.title.length < 2 || book.author.length < 2){
    return false;
  }
  else{
    return true;
  }
}
 //Implement show function
 Display.prototype.show = function(type, displaymessage){
let message = document.getElementById('message');
message.innerHTML= `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                      <strong>Message</strong> ${displaymessage}
                       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
                    
  setTimeout(function (){
    message.innerHTML = '';
  },2000);
 }

//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  //console.log("you have submitted library form");

  let title = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(title, author, type);
  console.log(book);
  let display = new Display();
  if(display.validate(book)){
  display.add(book);
  display.clear();
  display.show('sucess', 'Your book has been sucessful Add.');
}
  else{
   //Show Error to the user
   display.show('error', 'Sorry You can not Add this book.');
  }
 

  e.preventDefault();
}
