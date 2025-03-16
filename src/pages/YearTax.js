import React, { useState, useEffect } from "react";
import earnings from "../Assets/earnings.json";
import taxDeductions from "../Assets/tax_deductions_expenses.json";

const YearTax = () => {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxOwed, setTaxOwed] = useState(0);

  useEffect(() => {
    // Calculate total earnings
    const earningsTotal = earnings.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalEarnings(earningsTotal);

    // Calculate total deductible expenses
    const deductionsTotal = taxDeductions.expenses.reduce(
      (acc, category) => acc + category.items.reduce((sum, item) => sum + item.amount, 0),
      0
    );
    setTotalDeductions(deductionsTotal);

    // Calculate taxable income
    const taxable = earningsTotal - deductionsTotal;
    setTaxableIncome(taxable);

    // Calculate tax owed at 15.3% (Self-Employment Tax)
    const tax = taxable > 0 ? taxable * 0.153 : 0;
    setTaxOwed(tax);
  }, []);

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h2>Yearly Tax Summary</h2>
      <p><strong>Total Earnings:</strong> ${totalEarnings.toFixed(2)}</p>
      <p><strong>Total Deductions:</strong> ${totalDeductions.toFixed(2)}</p>
      <p><strong>Taxable Income:</strong> ${taxableIncome.toFixed(2)}</p>
      <p><strong>Tax Owed (15.3%):</strong> ${taxOwed.toFixed(2)}</p>
    </div>
  );
};

export default YearTax;