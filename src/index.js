import { ROOTObj } from "./scripts/Utils/root";
import { Sidebar } from "./scripts/Components/Sidebar/Sidebar";
import { MainPage } from "./scripts/Components/Main/MainPage";

import './assets/scss/style';
import { CpsPage } from "./scripts/Components/SecondPage/CpsPage";

import { routing } from "./scripts/Utils/routind";


const sidebar = new Sidebar(ROOTObj.sidebar, "sidebar");
const mainPage = new MainPage(ROOTObj.main, "main");
const cpsPage = new CpsPage(ROOTObj.main, "cps");

const pagesName = [mainPage, cpsPage];

sidebar.render();


window.location.hash = "main";

routing(ROOTObj.sidebar, 'data-page-name', pagesName);
