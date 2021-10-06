// Parsing list.txt

const fs = require('fs');

var list;

const parseData = (list, data) => {
  list = data.split(" ")
  for(let i = 0; i < list.length; i++){
    list[i] = parseInt(list[i], 10)
  }
  return list
}

try {
  const data = fs.readFileSync('list.txt', 'utf8');
  list = parseData(list, data)
} catch (error) {
  console.error(error.message);
}


// First try

// const merge = (array) => {
//   let half = Math.round(array.length/2)-1, leftHalf = array.slice(0,half), rightHalf = array.slice(half)
//   return mergeSort(array, leftHalf, rightHalf)
//   }

// const mergeSort = (array, l, r) => {
//   let lLength = l.length, rLength = r.length, i = array.length - lLength + rLength

//   if(l[0]>r[0]){
//     array[i] = l[0]
//     l[0].shift
//     mergeSort()
//   }
//   if(r[0]>l[0]){
//     array[i] = l[0]
//     r[0].shift
//   }
// }

// Second try

let count = 0

const merge = (l, r) => {
  let sortedArray = [];
  
  while(l.length || r.length){
    count++
    if(l[0] >= r[0]){
      sortedArray.push(r[0]);
      r.shift(r[0]);
    }else{
      sortedArray.push(l[0]);
      l.shift(l[0]);
    }
    if(!l.length && r.length){
      sortedArray.push(r[0]);
      r.shift(r[0]);
    }
    if(!r.length && l.length){
      sortedArray.push(l[0]);
      l.shift(l[0]);
    }
  }
  return sortedArray
}

const mergeSort = (array) => {
  if(array.length == 1){
    return array;
  }

  let half = Math.round(array.length/2), leftHalf = array.slice(0,half), rightHalf = array.slice(half);

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);
  
  return merge(leftHalf, rightHalf);
}

console.log(`Merge sort: ${count} comparaison - ${mergeSort([10,15,3,34, 6,15,132,456,8,1,67,1,987,31,84,61,-548684,156,86,-45, 64])}`)

// Xavier's method

const merge = (l, r) => {
  let sortedArray = [];
  
  while(l.length && r.length){
    count++
    if(l[0] >= r[0]){
      sortedArray.push(r[0]);
      r.shift(r[0]);
    }else{
      sortedArray.push(l[0]);
      l.shift(l[0]);
    }
  }
  return [...sortedArray, ...l, ...r]
}

const mergeSort = (array) => {
  if(array.length == 1){
    return array;
  }

  let half = Math.round(array.length/2), leftHalf = array.splice(0,half), rightHalf = array;

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);
  
  return merge(leftHalf, rightHalf);
}