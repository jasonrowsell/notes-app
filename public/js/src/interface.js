document.addEventListener('DOMContentLoaded', () => {
  let noteForm = document.querySelector('#note-form'),
    ul = document.querySelector('ul'),
    noteText = document.querySelector('#note-text'),
    notes = document.querySelector('#notes'),
    notesArray = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : [];

  localStorage.setItem('notes', JSON.stringify(notesArray));
  const data = JSON.parse(localStorage.getItem('notes'));

  const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };

  noteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    notesArray.push(noteText.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    liMaker(noteText.value);
    noteText.value = '';
  });

  data.forEach((item) => {
    liMaker(item);
  });

  // localStorage.setItem('notes', JSON.stringify(notesArray));
  // const data = JSON.parse(localStorage.getItem('notes'));

  // submits and displays note

  // noteForm.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   createNote(event);
  //   displayNote();
  //   localStorage.setItem('notes', JSON.stringify(notesArray));
  //   const data = JSON.parse(localStorage.getItem('notes'));
  // });

  // function createNote(event) {
  //   event.preventDefault();
  //   const text = noteText.value;
  //   note = new Note(text);
  //   notesArray.push(note);
  //   localStorage.setItem('notes', JSON.stringify(notesArray));
  // }

  // function displayNote() {
  //   data.forEach((note) => {
  //     _listMaker(note.text);
  //   });
  // }

  // function _listMaker(note) {
  //   const p = document.createElement('p');
  //   p.innerHTML = note;
  //   document.body.appendChild(p);
  // }

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
