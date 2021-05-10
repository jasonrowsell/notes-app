class Note {
  constructor(text) {
    this.text = text;
  }

  getNote() {
    return this.text;
  }

  abbreviate() {
    return this.text.substr(0, 20) + '...';
  }
}
