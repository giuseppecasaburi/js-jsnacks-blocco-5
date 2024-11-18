const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// FUNZIONE LUNGA
// const newArrayNums = nums.filter((nums, i) => {
//     if (nums % 2 === 0) { 
//     return true;
//     } else {
//     return false;
//     }
// })

// FUNZIONE ABBREVIATA
const newArrayNums = nums.filter(nums => nums % 2 === 0);
console.log(newArrayNums);