import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://rn-playground-expense-tracker-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
