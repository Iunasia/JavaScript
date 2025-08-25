let expense = [120, 75, 50, 300, 50];

let total = 0;

expense.forEach(expense => {
  console.log(`Expense recorded: $${expense}`);
  total += expense;
});

console.log(`Total Expenses: $${total}`);
