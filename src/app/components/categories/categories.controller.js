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
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
        });
    }

    deleteCat(detail) {
        let id = detail.id;
        this.categories = this.categoriesService.getCategories();
        this.categoriesService.deleteObj(this.categories, id);
        this.categoriesService.saveCategories(this.categories);
    }
}
