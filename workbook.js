let baseLoanAmountInput = document.getElementById('baseLoanAmount');
let subordinatedAmountInput = document.getElementById('subordinatedAmount');
let ffUmipInput = document.getElementById('ffUmip');
let umipRefundInput = document.getElementById('umipRefund');
let totalLoanAmountResult = document.getElementById('totalLoanAmount');
let marketValueInput = document.getElementById('marketValue');
let LTVvalueResult = document.getElementById('LTVvalue');
let CLTVvalueResult = document.getElementById('CLTVvalue');




// Listen for changes to the input elements
baseLoanAmountInput.addEventListener('input', totalLoanAmount);
subordinatedAmountInput.addEventListener('input', totalLoanAmount);
ffUmipInput.addEventListener('input', totalLoanAmount);
umipRefundInput.addEventListener('input', totalLoanAmount);


function totalLoanAmount() {
  const baseLoanAmount = Number(baseLoanAmountInput.value);
  const subordinatedAmount = Number(subordinatedAmountInput.value);
  const ffUmip = Number(ffUmipInput.value);
  const umipRefund = Number(umipRefundInput.value);

  const unformattedTotalLoanAmount = baseLoanAmount + subordinatedAmount + ffUmip - umipRefund;
  const formattedResult = unformattedTotalLoanAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  totalLoanAmountResult.value = formattedResult;
}



//LTV FUNCTION

function LTV() {
    const marketValue = Number(marketValueInput.value);
    const baseLoanAmount = Number(baseLoanAmountInput.value);

    const unformattedLTVvalue = (baseLoanAmount / marketValue)*100;
    const formattedLTVResult = unformattedLTVvalue.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3});
    LTVvalueResult.value = formattedLTVResult;
  }

  baseLoanAmountInput.addEventListener('input', LTV);
  marketValue.addEventListener('input', LTV);
  LTVvalue.addEventListener('input', LTV);
  baseLoanAmount.addEventListener('input', LTV);
// END LTV FUNCTION


//CLTV FUNCTION
  function CLTV() {
    const marketValue = Number(marketValueInput.value);

    const unformattedCLTVvalue = (totalLoanAmountResult.value / marketValue)*100;
    const formattedCLTVResult = unformattedCLTVvalue.toLocaleString(undefined, {minimumFractionDigits: 4, maximumFractionDigits: 4});
    CLTVvalueResult.value = formattedCLTVResult;

  }
  CLTVvalue.addEventListener('input', CLTV);
  baseLoanAmountInput.addEventListener('input', CLTV);
  marketValue.addEventListener('input', CLTV);
  subordinatedAmount.addEventListener('input', CLTV);
  ffUmip.addEventListener('input', CLTV);
  umipRefund.addEventListener('input', CLTV);

// END CLTV FUNCTION





let monthlySavingsInput = document.getElementById('monthlySavings');
let annualSavingsInput = document.getElementById('annualSavings');
let debtPaidInput = document.getElementById('debtPaid');
let adjtoFixInput = document.getElementById('adjtoFix');
let termReductionInput = document.getElementById('termReduction');
let paymentmReductionInput = document.getElementById('paymentmReduction');
let recoupInput = document.getElementById('recoup');





const calculateExistingPI = () => {
    let existingPI =
    totalLoanAmount *
    noteRate *
      (Math.pow(1 + noteRate, newTerm) /
        (Math.pow(1 + noteRate, newTerm) - 1));
  
    return emi;
  };