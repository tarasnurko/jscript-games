import { ROOTObj } from "../../Utils/root";

export class Sidebar {
  constructor() {

  }

  render() {
    const html = `
      <div class="sidebar">
        <div class="sidebar-title">Sidebar</div>

        <div class="sidebar__links-container">

          <a href="#" class="sidebar__links-item">Text</a>
          <a href="#" class="sidebar__links-item">Text</a>
          <a href="#" class="sidebar__links-item">Text</a>
          <a href="#" class="sidebar__links-item">Text</a>

        </div>
      </di>
    `;

    ROOTObj.sidebar.innerHTML = html;

  }
}

const sidebar = new Sidebar();
sidebar.render();

console.log('fdfdf')