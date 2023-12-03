function calculateTip(billAmount, tipPercentage) {
  if (billAmount < 0 || tipPercentage < 0) {
    console.error("Error");
    return null;
  }

  let tipAmount = billAmount * (tipPercentage / 100);
  return tipAmount.toFixed(2);
}
