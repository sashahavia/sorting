// function bubbleSort(array) {
//   /* your code here */
//   let swapped;
//   do {
//     swapped = false;
//     for(let i = 0; i < array.length; i++){ // 216 27
//         if(array[i] > array[i + 1]){
//           let temp = array[i]; // 216
//           array[i] = array[i + 1]; // array[4] = 27
//           array[i + 1] = temp; // array[5] = 216
//           swapped = true;
//         }
//     }

//   } while(swapped);
//   return array;
// }

// Method 2
function bubbleSort(array) {
  /* your code here */
  let length = array.length;
  for (let i = 0; i < length; i++) { // Number of passes
    for (let j = 0; j < (length - i - 1); j++) { // Notice that j < (length - i)
      // Compare the adjacent positions
      if(array[j] > array[j+1]) {
        // Swap the numbers
        let temp = array[j]; // Temporary variable to hold the current number
        array[j] = array[j+1]; // Replace current number with adjacent number
        array[j+1] = temp; // Replace adjacent number with current number
      }
    }
  }
  return array;
}

