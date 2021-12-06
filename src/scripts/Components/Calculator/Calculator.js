import { Page } from "../Page/Page";

export class Calculator extends Page {
  constructor(root, pageName) {
    super(root, pageName);
  }

  render() {
    const html = `
      <div class="page calculator">
        <div class="container">
          <h2 class="title calculator-title">Calculator</h2>
          <div class="subtitle calculator-subtitle">You can calculate some numbers</div>


          <div class="calculator-wrapper">
            <div class="calculator-output"></div>

            <div class="calculator__action-wrapper">
              <div class="calculator__action calculator__action-left_bracket">(</div>
              <div class="calculator__action calculator__action-rightbracket">)</div>
              <div class="calculator__action calculator__action-percent">%</div>
              <div class="calculator__action calculator__action-clear">C</div>

              <div class="calculator__action calculator__action-seven">7</div>
              <div class="calculator__action calculator__action-eight">8</div>
              <div class="calculator__action calculator__action-nine">9</div>
              <div class="calculator__action calculator__action-divide">÷</div>

              <div class="calculator__action calculator__action-four">4</div>
              <div class="calculator__action calculator__action-five">5</div>
              <div class="calculator__action calculator__action-six">6</div>
              <div class="calculator__action calculator__action-mult">×</div>

              <div class="calculator__action calculator__action-one">1</div>
              <div class="calculator__action calculator__action-two">2</div>
              <div class="calculator__action calculator__action-three">3</div>
              <div class="calculator__action calculator__action-minus">-</div>

              <div class="calculator__action calculator__action-zero">0</div>
              <div class="calculator__action calculator__action-point">.</div>
              <div class="calculator__action calculator__action-equal">=</div>
              <div class="calculator__action calculator__action-plus">+</div>
            </div>
          </div>

        </div>
      </div>
    `;

    this.root.innerHTML = html;
  }

}