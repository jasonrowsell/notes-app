'use strict';

function expect(actual) {
  return {
    toEqual: (expected) => {
      if (actual == expected) {
        console.log(`PASS`);
      } else {
        console.log(`FAIL: expected ${actual} to equal ${expected}`);
      }
    },
    toBe: (expected) => {
      if (actual instanceof expected) {
        console.log(`PASS`);
      } else {
        console.log(
          `FAIL: expected ${actual} to be and instance of ${expected}`
        );
      }
    },
  };
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}
