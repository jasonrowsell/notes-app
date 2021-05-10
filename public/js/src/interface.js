document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#create-note').addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.querySelector('#note-text').value;
    note = new Note(text)
    document.querySelector('#dumplings').innerText = note.getNote();
    alert("works")
    })


})