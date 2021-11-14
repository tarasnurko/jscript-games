import { Sidebar } from "./scripts/Components/Sidebar/Sidebar";
import { Promo } from "./scripts/Components/Promo/Promo";

import './assets/scss/style'


import { ROOTObj } from "./scripts/Utils/root";

const sidebar = new Sidebar();
sidebar.render();

const promo = new Promo(ROOTObj.main);
promo.render();