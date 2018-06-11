function bubbleSort(array) {
// array = [17, 43, 216, 3, 9, 27]
  /* your code here */
  // let swapped;
  // do {
  //   swapped = false;
  //   for(let i = 0; i < array.length; i++){ // 216 27
  //       if(array[i] > array[i + 1]){
  //         let temp = array[i]; // 216
  //         array[i] = array[i + 1]; // array[4] = 27
  //         array[i + 1] = temp; // array[5] = 216
  //         swapped = true;
  //       }
  //   }

  // } while(swapped);
  // return array;
  let length = array.length;
  do {
    swapped = false;
  for(let i = 0; i < length; i++){ // 216 27
    if(array[i] > array[i + 1]){
      let temp = array[i]; // 216
      array[i] = array[i + 1]; // array[4] = 27
      array[i + 1] = temp; // array[5] = 216
    }
    length--;
  }
  return array;
  } while(swapped);
}
