function calculateLoan() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('loanType').value); // Get interest rate from selected loan type
    const tenor = 12; // 12 months

    const monthlyInterestRate = interestRate / 12;
    const monthlyPrincipalRepayment = loanAmount / tenor;
    const repaymentScheduleTable = document.getElementById('repaymentSchedule').getElementsByTagName('tbody')[0];
    
    repaymentScheduleTable.innerHTML = '';

    let loanBalance = loanAmount;

    for (let month = 1; month <= tenor; month++) {
        const interestRepayment = loanBalance * monthlyInterestRate;
        const totalRepayment = monthlyPrincipalRepayment + interestRepayment;

        if (month === 1) {
            loanBalance = loanAmount - totalRepayment;
        } else {
            loanBalance -= totalRepayment;
        }

        const row = repaymentScheduleTable.insertRow();
        row.insertCell(0).innerText = month;
        row.insertCell(1).innerText = monthlyPrincipalRepayment.toFixed(2);
        row.insertCell(2).innerText = interestRepayment.toFixed(2);
        row.insertCell(3).innerText = totalRepayment.toFixed(2);
        row.insertCell(4).innerText = loanBalance.toFixed(2);
    }
}
