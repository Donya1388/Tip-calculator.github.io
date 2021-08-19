const ui = new UI();

const billForm = document.querySelector('.bill-form'),
      tipForm = document.querySelector('.tip-form');

const billInput = document.querySelector('.cost-form__bill-input');

let tipInput = document.getElementsByClassName('tip-counter__input');
tipInput.defaultValue = 15;
tipInput.value = tipInput.defaultValue;

const results = ['results__tip', 'results__total'];

let min = 15,
    max = 100;

let tip = 0,
    total = 0;

function clearTipDefaultInput() {
    if (tipInput.value === tipInput.defaultValue) {
        tipInput.value = null;
    }
}

function calculateTip() {

    clearResults(results);
    if (tipInput.value < min  || tipInput.value > max) {
        //ui.showAlert(`Please insert a number between ${min} to ${max}`);
    } else {
        const tip = billInput.value * tipInput.value / 100;
        ui.displayAmounts(tip, 'results__tip');

        const total = (+billInput.value) + (+tip);
        ui.displayAmounts(total, 'results__total');
    }
}

function clearResults() {

    results.forEach( (result) => {
        ui.clearResult(result);
    });
}

function getBill(e) {

    if (billInput.value != ''  &&  tipInput.value != '') {
        calculateTip();

        if (ui.tipCounterON) {
            ui.tipCounterON = false;
            return;
        } else
            e.preventDefault();
    } else {
        console.log('Please insert an amount');
        // ui.showAlert('Please insert an amount.');
    }
}

function displayResults() {

    billForm.addEventListener('submit', getBill);
}

displayResults();

