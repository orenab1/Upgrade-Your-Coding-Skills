function calculateTip(theBill, tip) {
  // check if bill and tip are valid
  if (theBill < 0 || tip < 0) {
    console.error("Error");
    return null;
  }

  let tipAmount = theBill * (tip / 100);
  return tipAmount.toFixed(2); // Rounds the tip to two decimal places
}
