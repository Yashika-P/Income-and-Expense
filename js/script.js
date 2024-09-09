
const errorMesgEl = document.querySelector('.error_message');
const budgetInputEl = document.querySelector('.budget_input');
const expenseDelEl = document.querySelector('.expenses_input');
const expenseAmountEl = document.querySelector('.expenses_amount');
const tblRecordEl = document.querySelector('.tbl_date');
const cardsContainer = document.querySelector('.cards');


const budgetCardEl = document.querySelector('.budget_card');
const expensesCardEl = document.querySelector('.expenses_card');
const balanceCardEl = document.querySelector('.balance_card');

let itemList = [];
let itemId = 0;

function btnEvents() {
    const btnBudgetCal = document.querySelector('#btn_budget')
    const btnExpensesCal = document.querySelector('#btn_expenses')
    
    btnBudgetCal.addEventListener("click", (e) => {
        e.preventDefault();
        budgetFun();
    });
    
    btnExpensesCal.addEventListener("click", (e) => {
        e.preventDefault();
        expensesFun();
     });
}

document.addEventListener("DOMContentLoaded", btnEvents);

function expensesFun() {
    let expensesDescValue = expenseDesEl.value;
    let expensesAmountValue = expenseAmountEl.value;
   
    if (expensesDescValue == "" || expensesAmountValue == "" || budgetInputEl < 0) {
        errorMessage("Please Enter Expenses Desc or Expenses Amount!")
    } else {
        let amount = parseInt(expenseAmountEl);
        
        expenseAmountEl.value = "";
        expenseDesEl.value = "";
 

    }
}

function budgetFun() {
    const budgetValue = budgetInputEl.value;
    
    if (budgetValue == "" || budgetValue < 0) {
        errorMessage("Please Enter Your Budget or More Than 0");
    } else {
        budgetCardEl.textContent = budgetValue;
        budgetInputEl.value = "";
        showBalance();
    }  
}

function showBalance() {
    const expenses = totalExpenses();
    const total = parseInt(budgetCardEl.textContent) - expenses;
    balanceCardEl.textContent = total;
}
function totalExpenses() {
    let total = 50;

    

    return total;   
}








function errorMessage(message) {
    errorMesgEl.innerHTML = `<p>${message}</p>`;
        errorMesgEl.classList.add("error");
        setTimeout(() => {
        errorMesgEl.classList.remove("error");
        }, 2500);
}