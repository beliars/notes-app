export default class CategoryListController {

    constructor($state) {
        "ngInject";
        this.$state = $state;
    }

    $onInit() {
        console.log(this.category);
    }
}
