// subject Function must return true if sum of 2 elements of array are equal to k. 
// If there is no combinaison it must return false

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

// O(n²) solution

const subjectOn2 = (array, k) => {
  for(let i = 0; i < array.length; i++){ // O(n) complexity
    if(array.includes(-(array[i]-k))){ //O(1) complexity
      return true
    }
  }
  return false
}

console.log(subjectOn2(list,17))

// O(n) solution

const subjectOn = (array, k) => {
  let set = new Set(array) // O(n) complexity
  for(let i = 0; i < array.length; i++){ // O(n) complexity
    if(set.has(10)){ //O(1) complexity
      return true
    }
  }
  return false
}

console.log(subjectOn(list,17))

// Google solution

const subjectGoogle = (array,k) => {
  let set = new Set()
  for(let i=0; i < array.length; i++){
    if(set.has(array[i])){
      return true
    }
    set.add(-(array[i]-k))
  }
  return false
}

console.log(subjectGoogle(list,17))