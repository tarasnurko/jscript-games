export class Page {
  constructor(root, pageName) {
    this.root = root;
    this.pageName = pageName;
  }

  pageClearHandler() {
    const html = ``;
    this.root.innerHTML = html;
  }
}