//Victor Ulloa & Newton Hoang

const prices = {
    popcorn: 4.50,
    soda: 2.00,
    candyBar: 1.25
}

function totalCost ({popcorn, soda, candyBar} ) {
    return popcorn + soda + candyBar;
}

const total = totalCost(prices);

console.log('The total cost of snacks is ' + total);
