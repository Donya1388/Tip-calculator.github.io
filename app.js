const ui = new UI();

const billForm = document.querySelector('.bill-form'),
      tipForm = document.querySelector('.tip-form');

const billInput = document.querySelector('.cost-form__bill-input');

let tipInput = document.getElementsByClassName('tip-counter__input');
tipInput.defaultValue = 15;
tipInput.value = tipInput.defaultValue;

let min = 5,
    max = 100;

function clearTipDefaultInput() {
    if (tipInput.value === tipInput.defaultValue) {
        tipInput.value = null;
    }
}

function calculateTip() {

    // tipForm.addEventListener('submit', getTip);
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

     const results = ['results__tip', 'results__total'];

    results.forEach( (result) => {
        ui.clearResult(result);
    });
}

function getBill(e) {

    clearResults();
    if (billInput.value === '') {
        console.log('Please insert an amount');
        // ui.showAlert('Please insert an amount.');
    }
    else console.log(billInput.value);

    calculateTip();

    billInput.value = '';
    e.preventDefault();
}

function getTip() {

}


function displayResults() {

    billForm.addEventListener('submit', getBill);
}

displayResults();

