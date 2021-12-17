import { Page } from "../Page/Page";

export class RandNumGraph extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.numGapSelSelector = '.randnum__choose-select_numgap';
    this.numIteratSelSelector = '.randnum__choose-select_numiteration';
    this.btnSelector = '.randnum__btn-item';
    this.graphWrapperSelector = '.randnum__graph-wrapper';
    this.graphItemSelector = '.randnum__graph-item';
    this.graphAmountSelector = '.randnum__graph-amount';
  }

  render () {
    const html = `
    <div class="page randnum">
      <div class="container container_cover-bg">
      
        <h2 class="title randnum-title">Random number</h2>
        <div class="subtitle randnum-subtitle">Random number generation diagram</div>

        <div class="randnum__choose-wrapper">

          <div class="randnum__choose-block">
            <div class="randnum__choose-item">
              <div class="randnum__choose-text">Choose number gap:</div>
              <select class="randnum__choose-select randnum__choose-select_numgap">
                <option value="0-1">0-1</option>
                <option value="0-2">0-2</option>
                <option value="0-3">0-3</option>
                <option value="0-4" selected>0-4</option>
                <option value="0-5">0-5</option>
                <option value="0-6">0-6</option>
                <option value="0-7">0-7</option>
                <option value="0-8">0-8</option>
                <option value="0-9">0-9</option>
              </select>
            </div>

            <div class="randnum__choose-item">
              <div class="randnum__choose-text">Choose amount of iteration:</div>
              <select class="randnum__choose-select randnum__choose-select_numiteration">
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100" selected>100</option>
                <option value="250">250</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2500">2500</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="20000">20000</option>
                <option value="30000">30000</option>
                <option value="50000">50000</option>
          
              </select>
            </div>
          </div>

          <div class="randnum__btn-wrapper">
            <a href="#" class="randnum__btn-item">Start</a>
          </div>

        </div>

        <div class="randnum__graph-wrapper">
          
        </div>
      
      </div>
    </div>
    `;

    this.root.innerHTML = html;

    this.createDiagram();
  }

  createDiagram() {
    const btn = document.querySelector(this.btnSelector),
          numGapSel = document.querySelector(this.numGapSelSelector),
          numIteratSel = document.querySelector(this.numIteratSelSelector),
          graphWrapper = document.querySelector(this.graphWrapperSelector);

    btn.addEventListener('click', event => {
      event.preventDefault();

      let numGapVal = +numGapSel.value[2];
      let numIteratVal = numIteratSel.value;

      this.createDiagramStructure(graphWrapper, numGapVal);

      let numGapOnPageArr = graphWrapper.querySelectorAll(this.graphItemSelector);

      for (let i = 0; i < numIteratVal; i++) {
        let randNum = Math.floor(Math.random() * (numGapVal + 1));

        numGapOnPageArr.forEach((item, index) => {
          
          if (randNum === index) {

            let graphAmountItem = item.querySelector(this.graphAmountSelector);

            let graphAmountTextCont = +graphAmountItem.textContent + 1;

            graphAmountItem.textContent = graphAmountTextCont;
          }

        });
      }

      this.animateGraph(graphWrapper, numGapOnPageArr);
      
    });
  }

  createDiagramStructure(graphWrapper ,numGapVal) {

    graphWrapper.innerHTML = '';

    for (let i = 0; i <= numGapVal; i++) {
      let html = `
        <div class="randnum__graph-item">
          <div class="randnum__graph-num">${i}</div>
          <div class="randnum__graph-amount">0</div>
        </div>
      `;

      
      graphWrapper.innerHTML += html;
    }
  }

  animateGraph(graphWrapper, numGapOnPageArr) {
    let graphWrapperHeight = window.getComputedStyle(graphWrapper).height.slice(0, 3);

    let maxAmount = +numGapOnPageArr[0].querySelector(this.graphAmountSelector).textContent;

    let maxItem = numGapOnPageArr[0].querySelector(this.graphAmountSelector);

    numGapOnPageArr.forEach(item => {

      let itemAmountTextCont = +item.querySelector(this.graphAmountSelector).textContent;

      if (maxAmount < itemAmountTextCont) {
        maxAmount = itemAmountTextCont;
        maxItem = item;
      }
    });

    numGapOnPageArr.forEach(item => {

      let itemAmountTextCont = +item.querySelector(this.graphAmountSelector).textContent;

      if (itemAmountTextCont === maxAmount) {
        item.style.height = '100%';
      } else {
         item.style.height = `${graphWrapperHeight * itemAmountTextCont /   maxAmount}px`;
      }

      item.style.opacity = '1';

    });
  }
}