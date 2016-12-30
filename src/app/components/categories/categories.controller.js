import { CategoriesService } from '../../services/categories.service';

export default class CategoriesController {

    constructor($state, $scope, $rootScope, CategoriesService) {
        "ngInject";
        this.$state = $state;
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.categoriesService = CategoriesService;
        this.pendingAdd = false;
        this.pendingDel = false;
    }

    $onInit() {
        this.categories = this.categoriesService.getCategories();
        this.$scope.$on('pendingAddEvent', (event, data) => {
            this.pendingAdd = data;
        });
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
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

    pendingDelete() {
        this.pendingDel = !this.pendingDel;
        this.$rootScope.$broadcast('pendingDelEvent', this.pendingDel);
    }
}
