// Simulated data for demonstration
// Replace these with real-time data from your ESP32
let voltage = 230; // in Volts
let current = 10; // in Amperes
let energyUsed = 0; // in kWh
const costPerUnit = 25; // Sri Lankan Rupees per kWh

function updateDisplay() {
    const power = voltage * current; // Power in Watts
    const bill = energyUsed * costPerUnit; // Calculate bill

    // Update the HTML with real-time values
    document.getElementById("voltage").textContent = voltage.toFixed(2);
    document.getElementById("current").textContent = current.toFixed(2);
    document.getElementById("power").textContent = power.toFixed(2);
    document.getElementById("units").textContent = energyUsed.toFixed(2);
    document.getElementById("bill").textContent = bill.toFixed(2);
}

// Simulate real-time updates (update every 1 second)
setInterval(() => {
    energyUsed += (voltage * current) / 1000 / 3600; // kWh increment
    updateDisplay();
}, 1000);
