function calculate() {
    const legsOrdered = parseInt(document.getElementById("legs").value) || 0;
    const wingsOrdered = parseInt(document.getElementById("wings").value) || 0;
    const fleshOrdered = parseFloat(document.getElementById("flesh").value) || 0;
  
    const legsPerChicken = 2;
    const wingsPerChicken = 2;
    const fleshPerChicken = 1; 
  
    const chickensForLegs = Math.ceil(legsOrdered / legsPerChicken);
    const chickensForWings = Math.ceil(wingsOrdered / wingsPerChicken);
    const chickensForFlesh = Math.ceil(fleshOrdered / fleshPerChicken);
  
    const totalChickensKilled = Math.max(chickensForLegs, chickensForWings, chickensForFlesh);
  
    const totalLegsServed = totalChickensKilled * legsPerChicken;
    const totalWingsServed = totalChickensKilled * wingsPerChicken;
    const totalFleshServed = totalChickensKilled * fleshPerChicken;
  
    const remainingLegs = totalLegsServed - legsOrdered;
    const remainingWings = totalWingsServed - wingsOrdered;
    const remainingFlesh = (totalFleshServed - fleshOrdered).toFixed(2);
  
    const results = `
      <strong>Chickens Killed:</strong> ${totalChickensKilled} <br>
      <strong>Weight Served:</strong> ${fleshOrdered} kg <br>
      <strong>Remaining Parts:</strong> <br>
      - Legs: ${remainingLegs} <br>
      - Wings: ${remainingWings} <br>
      - Flesh: ${remainingFlesh} <br>
      <strong>Remaining Flesh:</strong> ${remainingFlesh} kg
    `;
  
    document.getElementById("results").innerHTML = results;
  }