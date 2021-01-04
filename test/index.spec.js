const assert = require('assert');
const {duplicateNumber} = require('../index.js');

describe('Duplicate Number function tests', () => {
   it('returns duplicate number for test case #1', () => {
      let arr = [0, 0];
      let solution = 0;
      assert.strictEqual(solution, duplicateNumber(arr));    
   });

   it('returns duplicate number for test case #2', () => {
      let arr = [0, 2, 3, 1, 4, 5, 3];
      let solution = 3;
      assert.strictEqual(solution, duplicateNumber(arr));
   });

   it('returns duplicate number for test case #3', () => {
      let arr = [0, 1, 5, 4, 3, 2, 0];
      let solution = 0;
      assert.strictEqual(solution, duplicateNumber(arr));
   });

   it('returns duplicate number for test case #4', () => {
      let arr = [0, 1, 5, 5, 3, 2, 4];
      let solution = 5;
      assert.strictEqual(solution, duplicateNumber(arr));
   });
});