//Newton Hoang & Victor Ulloa

let entry = {
    accountHolder: "Newton Hoang",
    balance: 50.00,
    depositAmount: 20.00,
    withdrawAmount: 5.75
}

function bankRoll({balance, depositAmount, withdrawAmount}){
    balance += depositAmount;
    balance -= withdrawAmount;
    return balance
}

let result = bankRoll(entry);

console.log(entry.accountHolder + "'s updated balance is $" + result);