const conversion = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];


function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let registerCash = cid.reduce((obj, currency) => {
        obj.total += currency[1];
        obj[currency[0]] = currency[1];
        return obj;
    }, {total: 0});

    console.log(registerCash)

    if (registerCash.total === change) {
        return {status: 'CLOSED', change: cid};
    }

    if (registerCash.total < change) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    let res = conversion.reduce((obj, currency) => {
        let val = 0;
        while (registerCash[currency.name] > 0 && change >= currency.val) {
            change -= currency.val;
            registerCash[currency.name] -= currency.val;
            val += currency.val;
            change = Math.round(change * 100) / 100;
        }

        if (val > 0) {
            obj.push([currency.name, val]);
        }
        return obj;
    }, []);

    if (res.length < 1 || change > 0) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
      }
    
    return {status: 'OPEN', change: res};
};

