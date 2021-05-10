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
    notes.innerText = note.abbreviate();
  }

  // textarea auto resize

  const tx = document.getElementsByTagName('textarea');
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      'style',
      'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;'
    );
    tx[i].addEventListener('input', OnInput, false);
  }

  function OnInput() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  }
});
