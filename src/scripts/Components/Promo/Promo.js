import { Main } from "../Main/Main";

export class Promo extends Main {
  constructor(root) {
    super(root);
  }

  render() {
    const html = `
      <div class="page promo">
        <div class="container">
          <h1 class="promo-title">Tosik's game project</h1>
          <div class="promo-subtitle">Here you can play different games I made!</div>
          <div class="promo-descr">Ther's my web application with different games. Here I use my knowledge to create some cool things. I will update this project to make it bigger.</div>
        </div>
      </div>
    `;

    this.root.innerHTML = html;
  }
}