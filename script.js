/**
 * 25 - Merge Sort
 * 
 * ICS4U - Mr. Brash 🐿️
 *
 * A recursive "divide and conquer" sorting algorithm.
 *
 * Author:
 *
 */

'use strict';




/** A function to make an unsorted array of random numbers **/
function build_array(num_of_elements, min = -9999, max = 9999) {
  let arr = [];

  for (let x = 0; x < num_of_elements; x++)
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));

  return arr;
}
