console.log('Welcome to the CRM!');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
	button.addEventListener('click', function() {
		console.log('You clicked the ' + button.innerText + ' button.');
	});
});




const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

let myChart;

const checkValues = () => {
  let loanAmountValue = loanAmountInput.value;
  let interestRateValue = interestRateInput.value;
  let loanTenureValue = loanTenureInput.value;

  let regexNumber = /^[0-9]+$/;
  if (!loanAmountValue.match(regexNumber)) {
    loanAmountInput.value = "10000";
  }

  if (!loanTenureValue.match(regexNumber)) {
    loanTenureInput.value = "12";
  }

  let regexDecimalNumber = /^(\d*\.)?\d+$/;
  if (!interestRateValue.match(regexDecimalNumber)) {
    interestRateInput.value = "7.5";
  }
};

const displayChart = (totalInterestPayableValue) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Total Interest", "Principal Loan Amount"],
      datasets: [
        {
          data: [totalInterestPayableValue, loanAmount],
          backgroundColor: ["#e63946", "#14213d"],
          borderWidth: 0,
        },
      ],
    },
  });
};

const updateChart = (totalInterestPayableValue) => {
  myChart.data.datasets[0].data[0] = totalInterestPayableValue;
  myChart.data.datasets[0].data[1] = loanAmount;
  myChart.update();
};

const refreshInputValues = () => {
  loanAmount = parseFloat(loanAmountInput.value);
  interestRate = parseFloat(interestRateInput.value);
  loanTenure = parseFloat(loanTenureInput.value);
  interest = interestRate / 12 / 100;
};

const calculateEMI = () => {
  checkValues();
  refreshInputValues();
  let emi =
    loanAmount *
    interest *
    (Math.pow(1 + interest, loanTenure) /
      (Math.pow(1 + interest, loanTenure) - 1));

  return emi;
};

const updateData = (emi) => {
  loanEMIValue.innerHTML = Math.round(emi);

  let totalAmount = Math.round(loanTenure * emi);
  totalAmountValue.innerHTML = totalAmount;

  let totalInterestPayable = Math.round(totalAmount - loanAmount);
  totalInterestValue.innerHTML = totalInterestPayable;

  if (myChart) {
    updateChart(totalInterestPayable);
  } else {
    displayChart(totalInterestPayable);
  }
};

const init = () => {
  let emi = calculateEMI();
  updateData(emi);
};

init();

calculateBtn.addEventListener("click", init);






function addRow() {
  var table = document.getElementById("consumerDebt");
  var row = table.insertRow(table.rows.length);
  var debtor = row.insertCell(0);
  var type = row.insertCell(1);
  var balance = row.insertCell(2);
  var monthly = row.insertCell(3);
  var omit = row.insertCell(4);
  var pay = row.insertCell(5);
  debtor.innerHTML = "<input type='text' class='form-control' placeholder='Debtor'>";
  type.innerHTML = "<select class='form-control'><option value='installment loans'>Installment</option><option value='revolving debts'>Revolving</option><option value='leases'>Lease</option><option value='mortgages'>Mortgage</option></select>";
  balance.innerHTML = "<input type='text' class='form-control' placeholder='Balance'>";
  monthly.innerHTML = "<input type='text' class='form-control' placeholder='Monthly'>";
  omit.innerHTML = "<input type='checkbox'>";
  pay.innerHTML = "<input type='checkbox'>";
}

function removeRow() {
  var table = document.getElementById("consumerDebt");
  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);
  }
}

function addOrRemoveRow() {
  var table = document.getElementById("consumerDebt");
  var rowsCount = table.rows.length;

  if (rowsCount < 10) {
      addRow();
  } else if (rowsCount > 2) {
      removeRow();
  }
}




function addComment() {
  // Get the user's comment from the input field
  var comment = document.getElementById("comment").value;
  
  // Create a new list item to display the comment
  var commentListItem = document.createElement("li");
  commentListItem.innerHTML = comment;
  
  // Add the new list item to the comments list
  var commentsList = document.getElementById("comments-list");
  commentsList.appendChild(commentListItem);
  
  // Clear the input field
  document.getElementById("comment").value = "";
}
