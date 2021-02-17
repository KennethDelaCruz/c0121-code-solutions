/* exported Bank */
function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.openAccount = function (holder, balance) {
  var accountList = this.accounts;
  var startBalance = balance;
  if (balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(startBalance);
    accountList.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var accountList = this.accounts;
  var chosenAccount = 0;

  for (var i = 0; i < accountList.length; i++) {
    if (accountList[i].number === number) {
      chosenAccount = accountList[i];
    } else {
      continue;
    }
  }
  if (chosenAccount === 0) {
    return null;
  }
  return chosenAccount;
};

Bank.prototype.getTotalAssets = function () {
  var accountList = this.accounts;
  var totalAssets = 0;
  if (accountList.length === 0) {
    return 0;
  }
  for (var i = 0; i < accountList.length; i++) {
    totalAssets += accountList[i].getBalance();
  }
  return totalAssets;
};
