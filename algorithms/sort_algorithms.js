'use strict'

function swap(arr, idx1, idx2) {

}

function bubbleSort(arr) {
  let placeholder = 0;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < (arr.length - 1); i++) {
      if (arr[i] > arr[i+1]) {
        placeholder = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = placeholder;
        isSorted = false
      }
    }
  }
  return arr
}


function selectionSort(arr) {

}

function insertionSort(arr) {

}

function merge(arr1, arr2) {

}

function partition(arr, left, right) {

}

function mergeSort(arr) {

}

function quickSort(arr) {

}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  partition,
  mergeSort,
  quickSort
};
