document.addEventListener('DOMContentLoaded', () => {
  let noteForm = document.querySelector('#note-form'),
    ul = document.querySelector('.notes'),
    noteText = document.querySelector('#note-text'),
    container = document.querySelector('.container'),
    container2 = document.querySelector('.container2'),
    fullNote = document.querySelector('.full-note'),
    backButton = document.querySelector('#back-button'),
    notesArray = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : [];

  localStorage.setItem('notes', JSON.stringify(notesArray));
  const data = JSON.parse(localStorage.getItem('notes'));

  container2.style.display = 'none';

  // loads notes

  data.forEach((item) => {
    note = new Note(item);
    listMaker(note);
  });

  // creates note

  noteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitNote();
  });

  function submitNote() {
    var text = getEmoji(noteText.value);
    console.log(text);
    notesArray.push(text);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    note = new Note(text);
    listMaker(note);
  }

  function displayNote(note) {
    let text = note.getNote();
    container.style.display = 'none';
    container2.style.display = 'block';
    fullNote.textContent = text;
    backButton.addEventListener('click', (e) => {
      container.style.display = 'block';
      container2.style.display = 'none';
    });
  }

  function listMaker(note) {
    let li = document.createElement('li'),
      link = document.createElement('a'),
      description = `${note.getNote()}`;

    (link.textContent = description),
      (link.href = '#'),
      (link.id = description);

    link.addEventListener('click', (e) => {
      displayNote(note);
      e.preventDefault();
    });

    li.appendChild(link);
    ul.appendChild(li);

    noteText.value = '';
  }

  function getEmoji(text) {
    let text_json = JSON.parse(`{ "text": "${text}"}`);
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(text_json),
    })
      .then((response) => response.json())
      .then((data) => {
        let emojiText = data.emojified_text;
        return emojiText;
      });
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
