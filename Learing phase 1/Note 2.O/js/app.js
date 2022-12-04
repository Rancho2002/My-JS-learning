console.log('CLicked!')
shownotes()
search()
let btn = document.getElementById('addBtn1')
btn.addEventListener('click', function () {
    console.log('clicked on Btn')
    let txt = document.getElementById('addText')
    let txtElem = txt.value;
    let notes = localStorage.getItem('notes')
    noteObj = [];

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    noteObj.push(txtElem)
    localStorage.setItem('notes', JSON.stringify(noteObj))
    txt.value = '';
    console.log(noteObj);
    shownotes()
})
document.getElementById('addBtn2').addEventListener('click', function () {
    if(confirm('Do You Really Want To Clear the List?')) {
        localStorage.clear()
    shownotes()
    }       
})
function shownotes(index) {
    let notes = localStorage.getItem('notes')
    let noteObj = [];

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    let html = '';
    noteObj.forEach(function (element, index) {
        html += `<div class="Item card mx-3 my-3 container" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index+1}</h5>
              <p class="card-text ">${element}</p>
              <button class="btn btn-primary" onclick='deleteBtn(${index})'>Delete Note</button>
            </div>
          </div>`
        html += `<div class="notecard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id=${index} onclick="deleteNote(this.id)">Delete Note</button>
        </div>
    </div>`
    });
    let notesElem = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `<h2>Nothing added here , click 'Add Note' to add new Notes.</h2>`
    }
}




function deleteBtn(index) {
    console.log(index)
    let notes = localStorage.getItem('notes')
    let noteObj = [];

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    noteObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(noteObj))
    shownotes()
}

function search() {
    document.getElementById('search').addEventListener('input',function () {
        let searchVal=(document.getElementById('search').value).toLowerCase()
        console.log(searchVal)
        let noteItem=document.getElementsByClassName('Item')
        Array.from(noteItem).forEach(function(element) {
            let filterNote=document.getElementsByTagName('p')[0].innerText.toLowerCase()
            console.log(element)
            if (filterNote.includes(searchVal)){
                element.style.display = 'block';
            }
            else{
                element.style.display = 'none';

            }
        })
    })
}