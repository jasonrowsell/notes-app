document.addEventListener('DOMContentLoaded', () => {
  let noteForm = document.querySelector('#note-form'),
    noteText = document.querySelector('#note-text'),
    notes = document.querySelector('#notes');

  noteForm.addEventListener('submit', (event) => {
    createNote(event);
    displayNote();
  });

  function createNote(event) {
    event.preventDefault();
    const text = noteText.value;
    note = new Note(text);
  }

  function displayNote() {
    notes.innerText = note.getNote();
  }
});
