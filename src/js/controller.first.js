export default class ControllerFirst {

    constructor($scope, ServiceFirst) {
        this.$scope = $scope;
        this.ServiceFirst = ServiceFirst;
        this.data = { "title": "Hello Contorller" }

        this.data.nickName = ServiceFirst.title;
    }

    clickme() {
        this.data.ts = new Date();
        this.data.nickName = this.ServiceFirst.nickName;
    }

};