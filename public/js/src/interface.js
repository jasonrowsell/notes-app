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

  const listMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };

  noteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    notesArray.push(noteText.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    note = new Note(noteText.value);
    listMaker(note.abbreviate());
    noteText.value = '';
  });

  data.forEach((item) => {
    note = new Note(item.text);
    listMaker(note.abbreviate(note.text));
  });

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
