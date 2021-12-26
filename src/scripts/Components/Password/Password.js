import { Page } from "../Page/Page";

export class Password extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.passGenBtnSelector = '.password__generate-btn';
    this.passLengthSelSelector = '.password__select-length';
    this.passIutputSelector = '.password__output-input';
    this.passCopyBtnSelector = '.password__output-btn';
    this.passModalSelector = '.password__modal-copied';
    this.passModalActiveClass = 'password__modal-copied_active';
  }

  render() {
    const html = `
      <div class="page password">

        <div class="password__modal-copied">Password copied</div>

        <div class="container">
          <h2 class="title password-title">Password generator</h2>
          <div class="subtitle password-subtitle">Use password generator to create safe password</div>

          <div class="password-wrapper">
            <div class="password__select-wrapper">
              <div class="password__select-text">Choose password length:</div>
              <select class="password__select-length">
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10" selected>10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
            </div>

            <div class="password__generate-wrapper">
              <a href="#" class="password__generate-btn">Generate password</a>
            </div>

            <div class="password__output-wrapper">
              <input class="password__output-input" name="password" name="text" readonly>
              <a href="#" class="password__output-btn">Copy</a> 
            </div>

          </div>

        </div>
      </div>
    `;

    this.root.innerHTML = html;

    this.generatePassword();
    this.copyPassword();
  }

  generatePassword() {
    const passGenBtn = document.querySelector(this.passGenBtnSelector),
          passLengthSel = document.querySelector(this.passLengthSelSelector),
          input = document.querySelector(this.passIutputSelector),
          symbArr = ['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '!@#$&*?|%+-_./:;=()[]{}'];

    passGenBtn.addEventListener('click', event => {
      event.preventDefault();

      let passLengthSelVal = passLengthSel.value;

      // let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz',
      //     upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      //     numbers = '0123456789',
      //     symbols = '!@#$&*?|%+-_./:;=()[]{}';

      let passwordArr = [];

      for (let i = 0; i < passLengthSelVal; i++){
        let randSymbTypeNum = Math.floor(Math.random() * symbArr.length);

        let randSymbArr = symbArr[randSymbTypeNum].split('');

        let randSymb = Math.floor(Math.random() * randSymbArr.length);

        passwordArr.push(randSymbArr[randSymb]);
      }

      let password = passwordArr.join('');

      input.value = password;
    });
  }

  copyPassword() {
    const input = document.querySelector(this.passIutputSelector),
          passCopyBtn = document.querySelector(this.passCopyBtnSelector);

    passCopyBtn.addEventListener('click', event => {
      if (input.value !== '' ){
        event.preventDefault();

        input.select();
        document.execCommand("copy");

        this.copyModal();
      }
    });
  }

  copyModal() {
    const modal = document.querySelector(this.passModalSelector);

    modal.classList.add(this.passModalActiveClass);

    setTimeout(() => {
      modal.classList.remove(this.passModalActiveClass);
    }, 2000);
  }
}