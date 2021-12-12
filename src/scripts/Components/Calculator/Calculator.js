import { Page } from "../Page/Page";

export class Calculator extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.inputSelector = '.calculator__input-block';
    this.btnsSelector = '.calculator__item-block';
    this.actionClass = 'calculator__item-action';
    this.equalClass = 'calculator__item-equal';
    this.clearClass = 'calculator__item-clear';
    this.undoClass = 'calculator__item-undo';
    this.localStoragecalculatingName = 'calculating';
    this.errorMessage = "can't calculate this -_-";
  }

  render() {
    const html = `
      <div class="page calculator">
        <div class="container">
          <h2 class="title calculator-title">Calculator</h2>
          <div class="subtitle calculator-subtitle">You can calculate some numbers</div>


          <div class="calculator-wrapper">
            <div class="calculator__input-wrapper">
              <input disabled class="calculator__input-block" type="text" name="calculator-output">
            </div>

            <div class="calculator__item-wrapper">

              <div class="calculator__item-block calculator__item-undo">←</div>
              <div class="calculator__item-block calculator__item-action">%</div>
              <div class="calculator__item-block calculator__item-clear">C</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">7</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">8</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">9</div>
              <div class="calculator__item-block calculator__item-action">/</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">4</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">5</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">6</div>
              <div class="calculator__item-block calculator__item-action">*</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">1</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">2</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">3</div>
              <div class="calculator__item-block calculator__item-action">-</div>

              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">0</div>
              <div class="calculator__item-block calculator__item-action calculator__item_bg-white">.</div>
              <div class="calculator__item-block calculator__item-equal">=</div>
              <div class="calculator__item-block calculator__item-action">+</div>

            </div>

          </div>

        </div>
      </div>
    `;

    this.root.innerHTML = html;

    this.calculating();
  }

  calculating() {
    let input = document.querySelector(this.inputSelector),
          btns = document.querySelectorAll(this.btnsSelector),
          errorMessage = "try again";

    btns.forEach(item => {
      item.addEventListener('click', () => {
        if (input.value.includes(this.errorMessage)) {
          input.value = '';
        }

        if (item.classList.contains(this.actionClass)) {
          this.addSymb(item, input);
        } else if (item.classList.contains(this.equalClass)) {
          this.equal(input, this.errorMessage);
        } else if (item.classList.contains(this.undoClass)) {
          this.undo(input);
        } else if (item.classList.contains(this.clearClass)) {
          this.clear(input);
        } else if (item.classList.contains(this.historyClass)) {
        }
        
      });
    });

  }

  addSymb(item, input) {
    input.value += item.textContent;
  }

  undo(input) {
    let val = input.value.split(''); 
    val.pop();
  
    input.value = val.join('');
  }

  clear(input) {
    input.value = '';
  }

  equal(input) {
    let val = input.value;

    if (val.length !== 0) {
      try {
        input.value = eval(val);
      } catch(e) {
        input.value = this.errorMessage;
      }
    }
  }
}