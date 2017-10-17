import css from './css/style.css';

import angular from 'angular';

import ControllerFirst from './js/controller.first';
import ServiceFirst from './js/service.first';


let app = angular.module("app", []);
app.service("ServiceFirst", ServiceFirst);
app.controller("ControllerFirst", ControllerFirst);