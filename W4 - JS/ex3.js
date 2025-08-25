let prices = [10,20,30,40];

let discountedprices = prices.map(prices => prices * 0.8 );

discountedprices.forEach(price => {
  console.log(`Discounted price: $${price}`);
});