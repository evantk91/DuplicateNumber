function duplicateNumber(arr) {
   // You have been given an array of length n
   // the array contains integers from 0 to n - 2
   // Each number in the array is present exactly once except for one number which is present twice
   // Find and return this duplicate number present in the array
   let sumWithoutDuplicate = 0;
   let sumWithDuplicate = 0;

   for(let i = 0; i < arr.length - 1; i++) {
      sumWithoutDuplicate += i;
   }

   for(let i = 0; i < arr.length; i++) {
      sumWithDuplicate += arr[i];
   }

   return sumWithDuplicate - sumWithoutDuplicate;
}

module.exports = {
    duplicateNumber
}