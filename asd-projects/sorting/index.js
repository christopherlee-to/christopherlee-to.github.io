/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
  // Iterate over the array from i = 0 to length - 1
  for (let i = 0; i < array.length; i++) {
    // Iterate from the end of the array down to i + 1
    for (let j = array.length - 1; j > i; j--) {
      // Check if the element at j is smaller than the one before it
      if (array[j].value < array[j - 1].value) {
        swap(array, j, j - 1);
        updateCounter(bubbleCounter);
        await sleep();
      }
    }
  }
}


// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
  // Check if the section has more than one element
  if (right - left > 0) {
    // Partition the array and get the split index
    let index = await partition(array, left, right);

    // Recursively sort the left side
    if (left < index - 1) {
      await quickSort(array, left, index - 1);
    }

    // Recursively sort the right side
    if (index < right) {
      await quickSort(array, index, right);
    }
  }
}


// TODOs 4 & 5: Implement partition
/**
 * TODO 4 & 5: partition
 * This function finds a pivot, rearranges elements around it,
 * and returns the index for the next split in quickSort.
 */
async function partition(array, left, right) {
  // Select the pivot (middle element value)
  let pivot = array[Math.floor((right + left) / 2)].value;

  // Run as long as left and right pointers haven't crossed
  while (left < right) {
    // Move left pointer until we find a value >= pivot
    while (array[left].value < pivot) {
      left++;
    }
    
    // Move right pointer until we find a value <= pivot
    while (array[right].value > pivot) {
      right--;
    }

    // If pointers haven't crossed, swap the elements
    if (left < right) {
      swap(array, left, right);
      updateCounter(quickCounter);
      await sleep();
      
      // Crucial: Manually move pointers after swap to prevent infinite loops 
      // on duplicate values or when both equal the pivot.
      left++;
      right--;
    }
  }

  // Return the partition index as requested
  return left + 1;
}

// TODO 1: Implement swap
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  drawSwap(array, i, j);
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}