'use strict'

let note = new Note("note");

it('returns the text', function () {
  expect(note.getNote()).toEqual("note"); 
})
