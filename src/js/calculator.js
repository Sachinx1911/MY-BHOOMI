/* ==========================================
   MY BHOOMI GROUP - INTERACTIVE ROI CALCULATOR
   ========================================== */
export function initCalculator() {
  const sizeSlider = document.getElementById('calc-size');
  const priceSlider = document.getElementById('calc-price');
  const yearsSlider = document.getElementById('calc-years');

  const sizeVal = document.getElementById('calc-size-val');
  const priceVal = document.getElementById('calc-price-val');
  const yearsVal = document.getElementById('calc-years-val');

  const totalInvestOutput = document.getElementById('calc-total-invest');
  const futureValOutput = document.getElementById('calc-future-val');
  const profitOutput = document.getElementById('calc-profit');
  const roiPercentOutput = document.getElementById('calc-roi-percent');

  if (!sizeSlider || !priceSlider || !yearsSlider) return;

  // Formatting helpers
  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return '₹ ' + (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      return '₹ ' + (val / 100000).toFixed(2) + ' Lakh';
    }
    return '₹ ' + val.toLocaleString('en-IN');
  };

  const calculateROI = () => {
    const size = parseInt(sizeSlider.value, 10);
    const price = parseInt(priceSlider.value, 10);
    const years = parseInt(yearsSlider.value, 10);

    // Update value badges
    sizeVal.textContent = size.toLocaleString('en-IN') + ' sq.ft.';
    priceVal.textContent = '₹' + price.toLocaleString('en-IN') + '/sq.ft.';
    yearsVal.textContent = years + (years === 1 ? ' Year' : ' Years');

    // Financial calculations
    const totalInvestment = size * price;
    
    // Land Appreciation Rate (Compound Interest - 12.5% average annual rate)
    const appreciationRate = 0.125; 
    const futureValue = Math.round(totalInvestment * Math.pow(1 + appreciationRate, years));
    const netProfit = futureValue - totalInvestment;
    const roiPercentage = Math.round((netProfit / totalInvestment) * 100);

    // Write to DOM with standard luxury formatting
    totalInvestOutput.textContent = formatCurrency(totalInvestment);
    futureValOutput.textContent = formatCurrency(futureValue);
    profitOutput.textContent = formatCurrency(netProfit);
    roiPercentOutput.textContent = roiPercentage + '%';
  };

  // Attach event listeners
  [sizeSlider, priceSlider, yearsSlider].forEach(slider => {
    slider.addEventListener('input', calculateROI);
  });

  // Run initial calculation
  calculateROI();
}
