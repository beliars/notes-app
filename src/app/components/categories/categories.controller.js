import { CategoriesService } from '../../services/categories.service';

export default class CategoriesController {

    constructor($state, $scope, CategoriesService) {
        "ngInject";
        this.$state = $state;
        this.$scope = $scope;
        this.categoriesService = CategoriesService;
    }

    $onInit() {
        this.categories = this.categoriesService.getCategories();
        console.log(this.categories);

        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
        });
    }
}
