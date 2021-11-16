import { Page } from "../Page/Page";

export class Sidebar extends Page{
  constructor(root, pageName) {
    super(root, pageName);
  }

  render() {
    const html = `
      <div class="sidebar">
        <div class="sidebar-title">Sidebar</div>

        <div class="sidebar__links-container">

          <a href="#" data-page-name="main" class="sidebar__links-item">Main</a>

          <a href="#" data-page-name="cps" class="sidebar__links-item">CPS test</a>

          <a href="#" data-page-name="third" class="sidebar__links-item">Text</a>
          <a href="#" data-page-name="fourth" class="sidebar__links-item">Text</a>

        </div>
      </di>
    `;

    this.root.innerHTML = html;
  }
}



