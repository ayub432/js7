let numbers = [2, 4, 9, 10, 45, 67, 8, 90]; 
console.log(numbers, 'boshlanishdagi array');

let evenNumbers = []; 

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) { 
    evenNumbers.push(numbers[i]); 
  }
}

alert(numbers)

alert(evenNumbers)

console.log(evenNumbers, 'juft sonlarga ajratilgan array');