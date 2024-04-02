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
//--------------------------------------------------

let cidDef = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100],
];

let changeDue;

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-register-drawer');

const checkPayment = () => {
  if (!cash.value) {
    return;
  }
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
  checkCashRegister();
};

const checkCashRegister = () => {
  // calculate the change and round it up to exactly 2 decimals points e.g .1299999 => 0.13
  changeDue = cash.value - price;
  changeDue = Math.round((changeDue + Number.EPSILON) * 100) / 100;

  let result = [];
  cidDef.reverse();
  for (let i = 0; i < cidDef.length; i++) {
    let counter = 0;
    let cidDefKey = cidDef[i][0];
    let cidDefValue = cidDef[i][1];
    while (changeDue >= cidDefValue) {
      counter++;
      changeDue -= cidDefValue;
      changeDue = Math.round((changeDue + Number.EPSILON) * 100) / 100;
    }
    result.push([cidDefKey, cidDefValue, counter]);
  }
  updateUI(result);
};

const updateUI = (resultArr) => {
  const displayResult = [];
  if (resultArr) {
    resultArr
      .map((key) => {
        if (key[2] > 0) {
          displayResult.push(key);
        }
      })
      .filter((item) => item);
    displayResult.map((money) => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1] * money[2]}</p>`));
  }
  cash.value = '';
  priceScreen.textContent = price;
  cashDrawerDisplay.innerHTML = `${cid.map((money) => `<p>${[money[0]]}: $${money[1]}</p>`).join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkPayment);

cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkPayment();
  }
});

updateUI();
