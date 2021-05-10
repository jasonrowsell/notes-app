class Note {
  constructor(string) {
    this.string = string;
  }

  getNote() {
    return this.string
  }

  abbreviate() {
    return this.string.substr(0, 20) + '...';
  }
}
