class Notes {
  constructor() {
    this.notes = [];
  }

  abbreviate(string) {
    return string.substr(0, 20) + '...';
  }

  createNote(string) {
    this.notes.push(string);
  }

  showNotes() {
    return this.notes;
  }
}
