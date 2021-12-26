import { Page } from "../Page/Page";

export class MainPage extends Page {
  constructor(root, pageName) {
    super(root, pageName);
  }

  render() {
    const html = `
      <div class="page promo">
        <div class="container">
          <h1 class="title promo-title">Tosik's pet projects</h1>
          <div class="subtitle promo-subtitle">Here you can check my pet projects!</div>
          <div class="descr promo-descr">Ther's my web application with different pet projects. Here I use my knowledge to create some cool things.</div>
          <img src="assets/img/javacript.png" alt="">
        </div>
      </div>
    `;

    this.root.innerHTML = html;
  }
}
