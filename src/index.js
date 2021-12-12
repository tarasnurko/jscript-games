import { ROOTObj } from "./scripts/Utils/root";
import { Sidebar } from "./scripts/Components/Sidebar/Sidebar";
import { MainPage } from "./scripts/Components/Main/MainPage";
import { ToDo } from "./scripts/Components/ToDo/ToDo";
import './assets/scss/style';
import { Calculator } from "./scripts/Components/Calculator/Calculator";
import { Dogs } from "./scripts/Components/Dogs/Dogs";


// window.location.hash = "main";

const mainPage = new MainPage(ROOTObj.main, 'main');
const todoPage = new ToDo(ROOTObj.main, 'todo');
const calculatorPage = new Calculator(ROOTObj.main, 'calculator');
const dogsPage = new Dogs(ROOTObj.main, 'dogs')

const pagesName = [mainPage, todoPage, calculatorPage, dogsPage];

const sidebar = new Sidebar(ROOTObj.sidebar, 'sidebar', pagesName);

sidebar.render();



