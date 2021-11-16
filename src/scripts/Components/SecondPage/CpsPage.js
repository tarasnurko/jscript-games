import { Page } from "../Page/Page";

export class CpsPage extends Page {
  constructor(root, pageName) {
    super(root, pageName);
  }

  render() {
    const html = `
      <div data-active-page="second" class="page promo">
        <div class="container">
        <h2>Second Page</h2>
        </div>
      </div>
    `;

    this.root.innerHTML = html;
  }
}