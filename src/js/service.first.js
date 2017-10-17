export default class ServiceFirst {
    constructor($http) {
        this.$http = $http;

        this.title = "Angular 1, using Webpack";
        this.firstName = "Angular 1";
        this.nickName = "Webpack";
    }

    getTitle() {
        return this.title;
    }

}