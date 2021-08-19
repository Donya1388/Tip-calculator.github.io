
class UI {

    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.minus = document.querySelector('.tip-counter--minus');
        this.plus = document.querySelector('.tip-counter--plus');
        this.tipCounterON = false;
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

        if (billInput.value != '') {
            if (tipInput.value > min) {
                this.tipCounterON = true;
                tipInput.value -= 1;
                document.querySelector('.tip-counter__input').setAttribute('value', tipInput.value);
                getBill();
            } else {
                // showAlert
                console.log('Please insert a number between 15 to 100.');
            }
        }
    }

    setPlus() {

        if (billInput.value != '') {
            if (tipInput.value < max) {
                this.tipCounterON = true;
                tipInput.value += 1;
                document.querySelector('.tip-counter__input').setAttribute('value', tipInput.value);
                getBill();
            } else {
                // showAlert
                console.log('Please insert a number between 15 to 100.');
            }
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