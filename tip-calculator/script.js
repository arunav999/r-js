const total = document.getElementById("total");

const cal = document.getElementById("cal");

const calculateTotal = () => {
  const amount = document.getElementById("amount");
  const percentage = document.getElementById("percentage");

  const amountValue = amount.value;
  const percentageValue = percentage.value;

  const tipPercentage = percentageValue / 100;
  const tipAmount = amountValue * tipPercentage;

  const totalAmount = +amountValue + +tipAmount;

  total.innerHTML = totalAmount;

  // console.log(amountValue);
  // console.log(percentageValue);
  // console.log(tipPercentage);
  // console.log(tipAmount);
  // console.log(totalAmount);
};

cal.addEventListener("click", calculateTotal);
