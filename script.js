let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-register-drawer');

const checkPayment = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};
/* When price is 19.5, the value in the #cash element is 20, cid is
[["PENNY", 1.01],
["NICKEL", 2.05],
["DIME", 3.1],
["QUARTER", 4.25],
["ONE", 90],
["FIVE", 55],
["TEN", 20],
["TWENTY", 60],
["ONE HUNDRED", 100]],
and the #purchase-btn element is clicked,
the value in the #change-due element should be "Status: OPEN QUARTER: $0.5" */

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }
  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML = '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }
};

const updateUI = () => {
  priceScreen.textContent = price;
};

purchaseBtn.addEventListener('click', checkPayment);

cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkPayment();
  }
});

updateUI();
