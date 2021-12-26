var result = document.getElementById("result");
function BClicked() {
  var bool = 1;
  var price = document.getElementById("price").value;
  price = parseInt(price);
  if (fits (price) === 0) {
    bool=0;
    alert("ERROR");
  }

  var amount = document.getElementById("amount").value;
  amount = parseInt(amount);
  if (fits(amount)==0){
    bool=0;
    alert("ERROR");
  }

  if(bool==1){
    result.innerHTML = "Cost: " + price*amount;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  var ok = document.getElementById("on");
  ok.addEventListener("click", BClicked);
});

function fits(x) {
  if (!Number.isInteger(x)) {
    return 0;
  }
  return 1;
}