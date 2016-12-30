import { CategoriesService } from '../../services/categories.service';

export default class CategoryItemController {

    constructor($rootScope, $scope, $state, CategoriesService) {
        "ngInject";
        this.$scope = $scope;
        this.$state = $state;
        this.categoriesService = CategoriesService;
        this.pendingAdd = false;
        this.pendingDel = false;
    }

    $onInit() {
        this.$scope.$on('pendingAddEvent', (event, data) => {
            this.pendingAdd = data;
        });
        this.$scope.$on('pendingDelEvent', (event, data) => {
            this.pendingDel = data;
        });
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.pendingAdd = false;
            this.pendingDel = false;
        });
    }

    deleteCat(detail) {
        let id = detail.id;
        this.categories = this.categoriesService.getCategories();
        this.categoriesService.deleteObj(this.categories, id);
        this.categoriesService.saveCategories(this.categories);
    }

    addCat(detail) {
        this.categoriesService.chosenId = detail.id;
        this.categoriesService.addNewCategory();
    }
}
