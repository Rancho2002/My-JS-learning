console.log("this is note taking website");
showNotes(); //calling this function to show notes when page reload

let btn = document.getElementById("addNote");
btn.addEventListener("click", function () {
  let txt = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  noteobj.push(txt.value);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  txt.value = "";
  console.log(noteobj);
  showNotes();
});
let btn2 = document.getElementById("ClearNote");
btn2.addEventListener("click", function (e) {
  localStorage.clear();
  showNotes();
  console.log("local storage is cleared.");
});

function showNotes(element, index) {
  //start of defining showNotes function.
  let notes = localStorage.getItem("notes"); //taking a varible 'notes' which stores the object of local storage which have key 'notes'.
  if (notes == null) {
    //giving some condition if 'notes' variable became empty.
    noteobj = []; //we pass a blank array, in Added Note section.
  } else {
    noteobj = JSON.parse(notes); //we convert the notes  of Added Note section into array.
  }
  let html = ""; //now working on the innerHTML of notecard class
  noteobj.forEach(function (element, index) {
    // calling a function to add multiple notes.
    // html=document.getElementById('notes').innerHTML
    html += `<div class="notecard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id=${index} onclick="deleteNote(this.id)">Delete Note</button>
        </div>
    </div>`; //this would be the loop,inside the html, and the ${} functions make it unique for loop.
  });
  let notesElem = document.getElementById("notes");
  // console.log(noteobj.length)
  if (noteobj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `<h2>Nothing added here , click 'Add Note' to add new Notes.</h2>`;
  }
}

//Delete note

function deleteNote(index) {
  // console.log(`I am deleting ${index}`)
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(notes);
  }
  noteobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  showNotes();
}

// Creating search bar

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  // console.log('input event fired.', search.value)
  let inputVal = search.value.toLowerCase();
  let filterClass = document.getElementsByClassName("notecard");
  Array.from(filterClass).forEach(function (element) {
    let filterElem = element
      .getElementsByTagName("p")[0]
      .innerText.toLowerCase();
    if (filterElem.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
