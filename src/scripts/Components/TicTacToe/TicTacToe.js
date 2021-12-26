import { Page } from "../Page/Page";

export class TicTacToe extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.areaSelector = '.tictactoe-wrapper';
    this.boxClass = 'tictactoe-box';
    this.modalBacksideSelector = '.tictactoe__modal-backside';
    this.modalWrapperSelector = '.tictactoe__modal-wrapper';
    this.modalTitleSelector = '.tictactoe__modal-title';
    this.modalBtnSelector = '.tictactoe__modal-btn';
    this.move = 0;
  }

  render() {
    const html = `
      <div class="page tictactoe">
        <div class="container">
          <h2 class="title tictactoe-title">Tic-Tac-Toe</h2>
          <div class="subtitle tictactoe-subtitle">Enjoy playing Tic-Tac-Toe with your friend</div>

          <div class="tictactoe-wrapper">
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
            <div class="tictactoe-box"></div>
          </div>

          <div class="tictactoe__modal-backside">
            <div class="tictactoe__modal-wrapper">

              <div class="tictactoe__modal-title"></div>
              <div class="tictactoe__modal-text">For restart click the button</div>
              <div class="tictactoe__modal-block">
                <a href="#" class="tictactoe__modal-btn">Restart</a>
              </div>

            </div>
             
            
          </div>
          
        </div>
      </div>
    `;

    this.root.innerHTML = html;
    
    this.tictactoe();
  }

  tictactoe() {
    let modalBackside = document.querySelector(this.modalBacksideSelector);
    let area = document.querySelector(this.areaSelector);
    this.move = 0;
    let result = '';

    area.addEventListener('click', event => {
      if (event.target.className == this.boxClass && event.target.innerHTML == '') {
        
        this.move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
        this.move++;
        this.check(result);

        if (modalBackside.style.display == 'none') {
          this.isFull();
        }
      }
    });
  }
  check(result) {
    let boxes = document.querySelectorAll(`.${this.boxClass}`);
    
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winComb.forEach((item, index) => {
      if (
        boxes[winComb[index][0]].innerHTML == 'X' && boxes[winComb[index][1]].innerHTML == 'X' && boxes[winComb[index][2]].innerHTML == 'X'
      ) {
        result = 'WINNER: X';
        this.prepareResult(result);
      } else if (
        boxes[winComb[index][0]].innerHTML == '0' && boxes[winComb[index][1]].innerHTML == '0' && boxes[winComb[index][2]].innerHTML == '0'
      ) {
        result = 'WINNER: 0';
        this.prepareResult(result);
      }
    });
  }

  isFull() {
    let boxes = document.querySelectorAll(`.${this.boxClass}`);

    if (boxes[0].innerHTML != '' && boxes[1].innerHTML != '' && boxes[2].innerHTML != '' &&  boxes[3].innerHTML != '' && boxes[4].innerHTML != '' && boxes[5].innerHTML != '' && boxes[6].innerHTML != '' && boxes[7].innerHTML != '' && boxes[8].innerHTML != '') {
      this.prepareResult('Draw');
    }
  }

  prepareResult(result) {
    let modalBackside = document.querySelector(this.modalBacksideSelector),
        modalWrapper = document.querySelector(this.modalWrapperSelector),
        modalTitle = document.querySelector(this.modalTitleSelector);

    modalTitle.innerHTML = `${result}`;

    modalBackside.style.display = 'block';
    modalWrapper.style.display = 'block';

    document.body.style.overflow = 'hidden';

    this.closeModal(modalBackside ,modalWrapper);

  }

  closeModal(modalBackside ,modalWrapper) {

    const modalBtn = document.querySelector(this.modalBtnSelector);
    let boxes = document.querySelectorAll(`.${this.boxClass}`);

    modalBtn.addEventListener('click', event => {
      event.preventDefault();

      modalBackside.style.display = 'none';
      modalWrapper.style.display = 'none';

      boxes.forEach(item => {
        item.innerHTML = '';
      });

      this.move = 0;
    });

  }
}