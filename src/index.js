import { ROOTObj } from "./scripts/Utils/root";
import { Sidebar } from "./scripts/Components/Sidebar/Sidebar";
import { MainPage } from "./scripts/Components/Main/MainPage";
import { ToDo } from "./scripts/Components/ToDo/ToDo";
import { Calculator } from "./scripts/Components/Calculator/Calculator";
import { Dogs } from "./scripts/Components/Dogs/Dogs";
import { Password } from "./scripts/Components/Password/Password";
import { RandNumGraph } from "./scripts/Components/RandNumGraph/RandNumGraph";
import { TicTacToe } from "./scripts/Components/TicTacToe/TicTacToe";


const mainPage = new MainPage(ROOTObj.main, 'main');
const todoPage = new ToDo(ROOTObj.main, 'todo');
const calculatorPage = new Calculator(ROOTObj.main, 'calculator');
const dogsPage = new Dogs(ROOTObj.main, 'dogs');
const password = new Password(ROOTObj.main, 'password');
const randNumGraphPage = new RandNumGraph(ROOTObj.main, 'randnum');
const ticTacToePage = new TicTacToe(ROOTObj.main, 'tictactoe');

const pagesName = [mainPage, todoPage, calculatorPage, dogsPage, password, randNumGraphPage, ticTacToePage];

const sidebar = new Sidebar(ROOTObj.sidebar, 'sidebar', pagesName);

sidebar.render();



