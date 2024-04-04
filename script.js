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

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-register-drawer');

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map((money) => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`));
  return;
};

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

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
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
  cidDef.reverse();

  let drawer = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .map((total) => total[1])
      .reduce((prev, curr) => prev + curr)
      .toFixed(2)
  );

  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === changeDue) {
    drawer.status = 'CLOSED';
  }

  for (let i = 0; i < reversedCid.length; i++) {
    //let cidDefKey = cidDef[i][0];
    let cidDefValue = cidDef[i][1];
    if (changeDue > cidDefValue && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= cidDefValue) {
        total -= cidDefValue;
        changeDue = parseFloat((changeDue -= cidDefValue).toFixed(2));
        count++;
      }
      if (count > 0) {
        drawer.change.push([reversedCid[i][0], count * cidDefValue]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  formatResults(drawer.status, drawer.change);
  updateUI(drawer.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = (drawerChange) => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds',
  };

  if (drawerChange) {
    drawerChange.forEach((changeArr) => {
      const targetArr = cid.find((cidArr) => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = price;
  cashDrawerDisplay.innerHTML = `${cid.map((money) => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`).join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();
