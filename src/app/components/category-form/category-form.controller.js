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
    }

    $onInit() {
        this.categories = this.categoriesService.getCategories();
        this.getOptions(this.categories);
        this.$scope.$on('updateCategoriesEvent', (event, data) => {
            this.categories = data;
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
            this.mainCategory.id = this.getMaxId(this.categories) + 1;
            this.categories.push(this.mainCategory);
            console.log(this.categories);
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
            this.subCategory.id = this.getMaxId(this.categories) + 1;
            this.addObj(this.categories, this.subCategory, this.chosenOptionId);
            console.log(this.categories);
            this.subCategory = {
                id: null,
                name: '',
                children: []
            }
        this.categoriesService.saveCategories(this.categories);
        }
    }

    addObj(arr, obj, id) {
        arr.forEach(item => {
            if(item.id == id) {
                item.children.push(obj);
            }
            else if(item.children.length > 0) {
                this.addObj(item.children, obj, id);
            }
        })
    }

    getMaxId(arr) {
        arr.forEach(item => {
            this.idArr.push(item.id);
            if(item.children.length > 0) {
                this.getMaxId(item.children);
            }
        })
        return _.max(this.idArr);
    }
}
