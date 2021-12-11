import { ROOTObj } from "../../Utils/root";
import { Page } from "../Page/Page";

export class Sidebar extends Page{
  constructor(root, pageName, pagesName) {
    super(root, pageName);
    this.storragePageName = 'page';
    this.pagesName = pagesName;
    this.clockContainerSelector = '.sidebar__clock-container';
    this.dateContainerSelector = '.sidebar__date-container';
    this.buttonBlock = ROOTObj.sidebar;
    this.btnActiveClass = 'sidebar__links-item_active';
    this.routeAttr = 'data-page-name';
  }

  render() {
    const html = `
      <div class="sidebar">
        <div class="sidebar-title">Sidebar</div>

        <div class="sidebar__links-container">

          <a href="#" data-page-name="main" class="sidebar__links-item">Main</a>

          <a href="#" data-page-name="todo" class="sidebar__links-item">ToDo</a>

          <a href="#" data-page-name="calculator" class="sidebar__links-item">Calculator</a>
          <a href="#" data-page-name="fourth" class="sidebar__links-item">Text</a>

        </div>

        <div class="sidebar__clock-container">
          
        </div>

        <div class="sidebar__date-container">

        </div>
      </div>
    `;

    this.root.innerHTML = html;
    this.sidebarDate();

    
    this.openPage();

    this.routing();

    this.rememberPage();
  }

  routing() {

    const buttons = this.buttonBlock.querySelectorAll('.sidebar__links-item');

    let renderPage = () => {
      this.pagesName.forEach(i => {
        if (i.pageName === window.location.hash.slice(1)) {
          i.render();
        }
      });
    };

    renderPage();

    buttons.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        if (item.getAttribute(this.routeAttr) !== window.location.hash.slice(1)) {
          this.pagesName.forEach(a => a.pageClearHandler());

          buttons.forEach(a => a.classList.remove(this.btnActiveClass))
          
          window.location.hash = item.getAttribute(this.routeAttr);

          renderPage();

          item.classList.add(this.btnActiveClass);
        }
      });
    });
  }



  sidebarDate() {
    const clockContainer = document.querySelector(this.clockContainerSelector),
          dateContainer = document.querySelector(this.dateContainerSelector);

    function timer() {

      let date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      clockContainer.innerHTML = `
        <div class="sidebar__clock-hours">${addZeroBeforeNum(hours)}</div>
        <div class="sidebar__clock-divider">:</div>
        <div class="sidebar__clock-hours">${addZeroBeforeNum(minutes)}</div>
        <div class="sidebar__clock-divider">:</div>
        <div class="sidebar__clock-hours">${addZeroBeforeNum(seconds)}</div>
      `;

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      dateContainer.innerHTML = `
        <div class="sidebar__date-day">${addZeroBeforeNum(day)}</div>
        <div class="sidebar__date-divider">.</div>
        <div class="sidebar__date-month">${addZeroBeforeNum(month)}</div>
        <div class="sidebar__date-divider">.</div>
        <div class="sidebar__date-year">${year}</div>
      `;
    }

    function addZeroBeforeNum(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    }

    timer();
    setInterval(timer, 1000);
  }

  getPage() {
    let storragePage = localStorage.getItem(this.storragePageName);
  
    if (storragePage !== null) {
      return JSON.parse(storragePage);
    }
    return 'main';
  }

  openPage() {
    let page = this.getPage();

    window.location.hash = page;


    const buttons = this.buttonBlock.querySelectorAll('.sidebar__links-item');

    buttons.forEach(a => {
      if (a.getAttribute(this.routeAttr) === window.location.hash.slice(1)) {
        a.classList.add(this.btnActiveClass);
      }
    });
  }
  rememberPage() {
    window.addEventListener('hashchange', () => {
      localStorage.setItem(this.storragePageName, JSON.stringify(window.location.hash.slice(1)));
    });
  }
}
