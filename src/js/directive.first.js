/**
 * Directive using ES6 Useful Docs.
 * 
 * 1. https://www.michaelbromley.co.uk/blog/exploring-es6-classes-in-angularjs-1.x/
 * 2. https://instil.co/2016/09/27/angular-1-es6/
 */
export default class DirectiveFirst {
    constructor($timeout) {
        this.templateUrl = 'src/views/directive.first.html';
        this.restrict = 'EA';
        this.scope = {};
        this.controller = MyDirectiveController;
        this.controllerAs = "dircontroller"
    }

    // optional compile function 
    compile(tElement) {
        console.log(tElement);
    }

    // optional link function 
    link(scope, element) {
        console.log(tElement);
    }

}

class MyDirectiveController {
    constructor($scope) {
        this.$scope = $scope;

        this.data = { "title": "Directive Title" }
    }
}