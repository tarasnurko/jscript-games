import { Page } from "../Page/Page";

export class Dogs extends Page {
  constructor(root, pageName) {
    super(root, pageName);
    this.imgBlockSelector = '.dog__block-img';
    this.btnSelector = '.dog__block-btn';
    this.url = 'https://dog.ceo/api/breeds/image/random';
  }

  render() {
    const html = `
    
    <div class="page dogs">
      <div class="container container_cover-bg">
        <h2 class="title dogs-title">Dog image</h2>
        <div class="subtitle dogs-subtitle">Random dog image works by Dog API (<a href="https://dog.ceo/">link</a>)</div>
        <div class="dog__block-wrapper">
          <div class="dog__block-img"></div>
          <a href="#" class="dog__block-btn">Dog image</a>
        </div>
      </div>
    </div>

    `;

    this.root.innerHTML = html;

    this.getDog();
    this.btnClickListener();
  }

  getDog() {
    fetch(this.url)
      .then(responce => responce.json())
      .then(result => {
        let imgBlock = document.querySelector(this.imgBlockSelector);

        imgBlock.innerHTML = `
          <img src="${result.message}" alt=""dog-img>
        `;
      });
  }

  btnClickListener() {
    let btn = document.querySelector(this.btnSelector);

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.getDog();
    });
  }
}