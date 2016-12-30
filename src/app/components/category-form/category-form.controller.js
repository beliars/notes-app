import { CategoriesService } from '../../services/categories.service';

export default class CategoryFormController {

    constructor($rootScope, $scope, CategoriesService) {
        "ngInject";
        this.categoriesService = CategoriesService;
        this.$scope = $scope;
        this.$rootScope = $rootScope;

        this.category = {
            id: null,
            name: '',
            children: []
        }
        this.options = [];
        this.pendingAdd = false;
    }

    $onChanges() {
        this.categories = this.categoriesService.getCategories();
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
        });
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.pendingAdd = false;
        });
    }


    onSubmit(form) {
        if(form.$valid) {
            this.categoriesService.newCategory.name = this.category.name;
            this.categoriesService.addNewCategoryToRoot();
            this.category = {
                id: null,
                name: '',
                children: []
            }
        }
    }

    addToParent() {
        if(this.category.name) {
            this.pendingAdd = true;
            this.$rootScope.$broadcast('pendingAddEvent', this.pendingAdd);
            this.categoriesService.newCategory.name = this.category.name;

            this.category = {
                id: null,
                name: '',
                children: []
            }
        }
    }

    cancelAddPending() {
        this.pendingAdd = false;
        this.$rootScope.$broadcast('pendingAddEvent', this.pendingAdd);
    }

}
