function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let result = [];
  let left = 0;
  let right = 0;
  while(left < arr1.length && right < arr2.length){
    if(arr1[left] < arr2[right]){
      result.push(arr1[left]);
      left++;
    } else{
      result.push(arr2[right]);
      right++;
    }
  }
  for(left; left < arr1.length; left++){
    result.push(arr1[left]);
  }
  for(right; right < arr2.length; right++){
    result.push(arr2[right]);
  }
  return result;
}

function mergeSort(array) {
  /* your code here */
  // let sorted = [];
  if(array.length < 2){
    return array;
  }
  let arrDivided = split(array);
  // console.log("Divided", arrDivided);


  return merge(mergeSort(arrDivided[0]), mergeSort(arrDivided[1]));
}
