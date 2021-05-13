'use strict';

let note = new Note('noteislongerthan20characters');

it('returns the text', () => {
  expect(note.getNote()).toEqual('noteislongerthan20characters');
});

it('returns the text abbreviate', () => {
  expect(note.abbreviate()).toEqual('noteislongerthan20ch...');
});

it('test', () => {
  expect(note).toBe(Note);
});
