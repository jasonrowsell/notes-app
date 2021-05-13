'use strict';

let note = new Note('noteislongerthan20characters');
let shortNote = new Note('a short note')

it('returns the text', () => {
  expect(note.getNote()).toEqual('noteislongerthan20characters');
});

it('returns the text abbreviate', () => {
  expect(note.abbreviate()).toEqual('noteislongerthan20ch...');
});

it('test', () => {
  expect(note).toBe(Note);
});

it('does not abbreviate if it has less than 20 characters', () => {
  expect(shortNote.abbreviate()).toEqual('a short note...');
});
