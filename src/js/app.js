// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

//<React>=================================
import Index from './react/index.jsx';

//<Функционал>=================================
import * as flsFunctions from "./files/functions.js";

//<Бургер>=================================
flsFunctions.menuInit();

//<Подключение остального>=================================
import "./files/script.js";