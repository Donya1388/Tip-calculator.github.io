const ui = new UI();

const billForm = document.querySelector('.bill-form'),
      tipForm = document.querySelector('.tip-form');

const billInput = document.querySelector('.cost-form__bill-input');

let tipInput = document.getElementsByClassName('tip-counter__input');
tipInput.defaultValue = 15;
tipInput.value = tipInput.defaultValue;

function clearTipDefaultInput() {
    if (tipInput.value === tipInput.defaultValue) {
        tipInput.value = null;
    }
}

function calculateTip() {

    let min = 15,
        max = 100;

    if (tipInput.value < min  || tipInput.value > max) {
        //ui.showAlert(`Please insert a number between ${min} to ${max}`);
    } else {
        const tip = billInput.value * tipInput.value / 100;
        ui.displayAmounts(tip, 'results__tip');

        const total = (+billInput.value) + (+tip);
        ui.displayAmounts(total, 'results__total');
    }
}

function getBill(e) {
    if (billInput.value === '') {
        console.log('Please insert an amount');
        // ui.showAlert('Please insert an amount.');
    }
    else console.log(billInput.value);

    calculateTip();

    billInput.value = '';
    e.preventDefault();
}

function displayResults() {

    billForm.addEventListener('submit', getBill);
}

displayResults();

