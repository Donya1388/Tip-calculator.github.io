
class UI {

    constructor(min, max) {
        this.min = min;
        this.max = max;
    }


    displayAmounts(amount, classname) {
        const p = document.createElement('p');
        p.className = 'align-right';
        p.appendChild(document.createTextNode(amount));
        const result = document.querySelector(`.${classname}`);
        const firstChild = result.children[0];
        firstChild.parentNode.insertBefore(p, firstChild.nextSibling);
    }

    clearResult(classname) {
        if (document.querySelector(`.${classname}`).children[1]) {
            document.querySelector(`.${classname}`).children[1].remove();
        }
    }

    setMinus() {
        if (tipInput.value > min) {
            tipInput.value -= 1;
            var value = document.querySelector('.tip-counter__input').setAttribute('value', tipInput.value);
        } else {
            // showAlert
            console.log('Please insert a number between 15 to 100.');
        }
    }

    setPlus() {
        if (tipInput.value < max) {
            tipInput.value += 1;
            var value = document.querySelector('.tip-counter__input').setAttribute('value', tipInput.value);
        } else {
            // showAlert
            console.log('Please insert a number between 15 to 100.');
        }
    }

//     setTipDefaultInput() {
//     // if (tipInput.value === "") {
//     //     tipInput.value = tipInput.defaultValue;
//     //     text = tipInput[0].setAttribute('value', tipInput.value);
//     // }
//     if (tipInput.value === tipInput.defaultValue) {
//         tipInput.value = "";
//         text = tipInput[0].setAttribute('value', '');
//     }
// }



    // showAlert(message) {
    //     const container = document.querySelector('.container');
    //     const
    //     const errorDiv = document.createElement('div');

    // }

}