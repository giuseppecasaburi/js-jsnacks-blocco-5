const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

console.log(numbers);
const newArrayNumbers = numbers.map((numbers, i) => {
    return numbers +1;
    // CHIEDERE PERCHE numbers[1] non va bene
});

console.log(newArrayNumbers);
