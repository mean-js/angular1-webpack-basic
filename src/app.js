import css from './css/style.css';

import angular from 'angular';

import ControllerFirst from './js/controller.first';
import ServiceFirst from './js/service.first';
import DirectiveFirst from './js/directive.first';


let app = angular.module("app", []);
app.service("ServiceFirst", ServiceFirst);
app.directive("directiveFirst", DirectiveFirst);
app.controller("ControllerFirst", ControllerFirst);