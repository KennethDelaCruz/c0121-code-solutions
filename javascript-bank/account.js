/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transactionsList = this.transactions;
  var newTransaction = new Transaction('deposit', amount);

  if (amount > 0) {
    transactionsList.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var transactionsList = this.transactions;
  var newTransaction = new Transaction('withdraw', amount);
  if (amount > 0) {
    transactionsList.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var transactionsList = this.transactions;
  var balance = 0;

  for (var i = 0; i < transactionsList.length; i++) {
    if (transactionsList[i].type === 'deposit') {
      balance += transactionsList[i].amount;
    } else if (transactionsList[i].type === 'withdraw') {
      balance -= transactionsList[i].amount;
    }
  }
  return balance;

};
