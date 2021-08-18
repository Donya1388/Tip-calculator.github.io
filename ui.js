
class UI {

    constructor() {

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




// <!-- Tip input -->
//             <label for="Tip" class="cost-form__tip-counter-label">Tip:</label>
//             <span class="tip-counter--minus" onclick="ui.setMinus();">-</span>
//             <input type="text" class="tip-counter__input" />
//             <!-- <input class="tip-counter__input" onfocus="ui.clearTipDefaultInput();" onblur="ui.setTipDefaultInput()" type="text" value="15"/> -->
//             <!-- <span class="tip-counter__value">15%</span> -->
//             <span class="tip-counter--plus" onclick="ui.setPlus();">+</span>
//         <div class="results">
//             <div class="results__tip">
//                 <p class="results__tip-label align-left">Tip</p>
//             </div>
//             <div class="results__total">
//                 <p class="results__total-label align-left">Total</p>
//             </div>
//         </div>