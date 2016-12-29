import { CategoriesService } from '../../services/categories.service';

export default class CategoryFormController {

    constructor($scope, CategoriesService) {
        "ngInject";
        this.categoriesService = CategoriesService;
        this.$scope = $scope;
        this.mainCategory = {
            id: null,
            name: '',
            children: []
        }
        this.subCategory = {
            id: null,
            name: '',
            children: []
        }
        this.options = [];
        this.chosenOptionId = null;
        this.idArr = [];
        this.showSubCatform = false;
    }

    $onChanges() {
        this.categories = this.categoriesService.getCategories();
        this.getOptions(this.categories);
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
            this.options = [];
            this.getOptions(this.categories);
        });
    }

    getOptions(array) {
        array.forEach(item => {
            this.options.push({id: item.id, name: item.name});
            if(item.children.length > 0) this.getOptions(item.children)
        })
    }

    onSubmitCat(form) {
        if(form.$valid) {
            this.mainCategory.id = this.getId(this.categories, []) + 1;
            this.categories.push(this.mainCategory);
            this.mainCategory = {
                id: null,
                name: '',
                children: []
            }
        this.categoriesService.saveCategories(this.categories);
        }
    }

    onSubmitSubcat(form) {
        if(form.$valid) {
            this.subCategory.id = this.getId(this.categories, []) + 1;
            this.addSubCat(this.categories, this.subCategory, this.chosenOptionId);
            this.subCategory = {
                id: null,
                name: '',
                children: []
            }
        this.categoriesService.saveCategories(this.categories);
        }
    }

    addSubCat(arr, obj, id) {
        this.categoriesService.addObj(arr, obj, id);
    }

    getId(arr, max) {
        return this.categoriesService.getMaxId(arr, max);
    }

    toogleSubCatForm() {
        this.showSubCatform = !this.showSubCatform;
    }
}
