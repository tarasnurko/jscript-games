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

          <a href="#" data-page-name="main" class="sidebar__links-item sidebar__links-item_active">Main</a>

          <a href="#" data-page-name="todo" class="sidebar__links-item">ToDo</a>

          <a href="#" data-page-name="third" class="sidebar__links-item">Text</a>
          <a href="#" data-page-name="fourth" class="sidebar__links-item">Text</a>

        </div>

        <div class="sidebar__clock-container">
          
        </div>

        <div class="sidebar__date-container">

        </div>
      </div>
    `;

    this.root.innerHTML = html;
  }

  sidebarDate(clockContainerSelector, dateContainerSelector) {
    const clockContainer = document.querySelector(clockContainerSelector),
          dateContainer = document.querySelector(dateContainerSelector);

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
      <div class="sidebar__date-day">${day}</div>
      <div class="sidebar__date-divider">.</div>
      <div class="sidebar__date-month">${month}</div>
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
}



