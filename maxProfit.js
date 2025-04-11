const maxProfit = (price) => {
  let globalProfit = 0;

  for (let i = 0; i < price.length - 1; i++) {
    for (let j = i + 1; j < price.length; j++) {
      const currentProfit = price[j] - price[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
