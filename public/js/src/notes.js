class Notes {
  constructor() {
    this.notes = [];
  }

  createNote(string) {
    this.notes.push(string);
  }

  showNotes() {
    return this.notes.forEach((note) => note.substr(0, 20) + '...');
  }
}
