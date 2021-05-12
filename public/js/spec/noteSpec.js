'use strict'

let note = new Note("noteislongerthan20characters");

it('returns the text', function () {
  expect(note.getNote()).toEqual("noteislongerthan20characters"); 
})

it ('returns the text abbreviate', function () {
  expect(note.abbreviate()).toEqual("noteislongerthan20ch...")
})
