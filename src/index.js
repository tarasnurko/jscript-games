import { ROOTObj } from "./scripts/Utils/root";
import { Sidebar } from "./scripts/Components/Sidebar/Sidebar";
import { MainPage } from "./scripts/Components/Main/MainPage";
import { ToDo } from "./scripts/Components/ToDo/ToDo";
import './assets/scss/style';

import { routing } from "./scripts/Utils/routind";


const sidebar = new Sidebar(ROOTObj.sidebar, "sidebar");
const mainPage = new MainPage(ROOTObj.main, "main");
const todoPage = new ToDo(ROOTObj.main, "todo");

const pagesName = [mainPage, todoPage];

sidebar.render();


window.location.hash = "main";
routing(ROOTObj.sidebar, 'data-page-name', pagesName, 'sidebar__links-item_active');


sidebar.sidebarDate('.sidebar__clock-container', '.sidebar__date-container');