import { CategoriesService } from '../../services/categories.service';

export default class CategoryItemController {

    constructor($rootScope, $scope, $state, CategoriesService) {
        "ngInject";
        this.$scope = $scope;
        this.$state = $state;
        this.categoriesService = CategoriesService;
        this.pendingAdd = false;
        this.pendingDel = false;
        this.selectedDetail = [];
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
        if(this.note) {
            _.each(this.note.categories, (item) => {
                this.selectedDetail[item.id] = item;
            });
        }
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

    onSelect(detail) {
        if(this.selectedDetail[detail.id]){
            if(this.selectedDetail[detail.id].id != detail.id) {
                this.selectedDetail[detail.id] = detail;
            }
            else {
                this.selectedDetail[detail.id] = false;
            }
        }
        else {
            this.selectedDetail[detail.id] = detail;
        }
    }
}
