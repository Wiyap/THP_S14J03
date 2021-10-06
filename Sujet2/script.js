// subject function must return an integer equal to the number of building brighten by the sun

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

// Mailchimp solution (also O(n) solution)

const subjectMailchimp = (array) => {
  let brightenedBuildings = 1
  let min = array[0]
  for(let i = array.length-2; i >= 0; i--){
    if(array[i] > min){
      min = array[i]
      brightenedBuildings++
    }
  }
  return brightenedBuildings
}

console.log(subjectMailchimp([3, 7, 8, 3, 6, 1]))