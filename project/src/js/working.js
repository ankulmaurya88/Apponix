// 1. Select the display screen
const display = document.getElementById('value');

// 2. Select all buttons
const buttons = document.querySelectorAll('.btn');

// 3. Add click event to every button
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const clickedValue = e.target.innerText; // Get text like "7", "+", "AC"

        // Logic for AC (All Clear)
        if (clickedValue === 'AC') {
            display.value = '';
        } 
        // Logic for = (Calculate)
        else if (clickedValue === '=') {
            try {
                // eval() calculates the string math (e.g., "2+2")
                display.value = eval(display.value); 
            } catch (error) {
                display.value = 'Error';
            }
        } 
        // Logic for CLS (Clear Last Character)
        else if (clickedValue === 'cls') {
            display.value = display.value.slice(0, -1);
        }
        // Logic for Numbers and Operators (+, -, *, /)
        else {
            display.value += clickedValue;
            // display.value=0
        }
    });
});   




// 1. Select Elements
const amountEl = document.getElementById('value-1');
const fromCurrencyEl = document.getElementById('value-2');
const toCurrencyEl = document.getElementById('value-3');
const resultEl = document.getElementById('value-4');
const swapBtn = document.getElementById('swap');
const convertBtn = document.getElementById('convert-Currency');

// 2. Define Exchange Rates (Mock Data for Demo)
// In a real app, you would fetch this from an API like exchangerate-api.com
const exchangeRates = {
    "INR": 1,
    "USD": 0.012, // 1 INR = 0.012 USD
    "EUR": 0.011  // 1 INR = 0.011 EUR
};

// 3. Convert Function
function convertCurrency() {
    const amount = parseFloat(amountEl.value);
    const from = fromCurrencyEl.value;
    const to = toCurrencyEl.value;

    // Validate input
    if (isNaN(amount)) {
        resultEl.value = "Please enter a valid amount";
        return;
    }

    // Calculate using mock rates (Relative to INR base for simplicity)
    // Formula: (Amount / Rate_From) * Rate_To
    // Note: This simple mock assumes base is INR. For real apps, use API.
    
    let result;
    
    // Simple mock logic for the 3 currencies provided
    if (from === to) {
        result = amount;
    } else if (from === "INR" && to === "USD") {
        result = (amount * 0.012).toFixed(2);
    } else if (from === "INR" && to === "EUR") {
        result = (amount * 0.011).toFixed(2);
    } else if (from === "USD" && to === "INR") {
        result = (amount / 0.012).toFixed(2);
    } else if (from === "USD" && to === "EUR") {
        result = (amount * 0.92).toFixed(2); // Approx
    } else if (from === "EUR" && to === "INR") {
        result = (amount / 0.011).toFixed(2);
    } else if (from === "EUR" && to === "USD") {
        result = (amount / 0.92).toFixed(2); // Approx
    } else {
        result = "Rate not found";
    }

    // Display Result
    resultEl.value = `${result} ${to}`;
    
    // Optional: Add to history (if you have a history function)
    // addToHistory(`${amount} ${from} = ${result} ${to}`);
}

// 4. Swap Function
function swapCurrencies() {
    const temp = fromCurrencyEl.value;
    fromCurrencyEl.value = toCurrencyEl.value;
    toCurrencyEl.value = temp;
    
    // Optional: Auto-convert after swap
    convertCurrency();
}

// 5. Add Event Listeners
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);

// Optional: Convert automatically when inputs change
amountEl.addEventListener('input', convertCurrency);
fromCurrencyEl.addEventListener('change', convertCurrency);
toCurrencyEl.addEventListener('change', convertCurrency);   