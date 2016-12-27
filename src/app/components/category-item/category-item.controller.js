export default class CategoryItemController {

    constructor($state) {
        "ngInject";
        this.$state = $state;
    }

    $onInit() {
        console.log(this.detail.children);
    }
}
