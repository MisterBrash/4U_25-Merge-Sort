/*
 * ICS4U - Mr. Brash 🐿️
 *
 * Read the README carefully.
 *
 * Author:
 *
 */

'use strict';

/** A useful function to make an unsorted array of numbers for you */
function build_array(num_of_elements) {
  let arr = [];
  const min = -999;
  const max = 999;

  for (let x = 0; x < num_of_elements; x++) {

    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}
