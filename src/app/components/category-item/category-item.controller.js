import { CategoriesService } from '../../services/categories.service';

export default class CategoryItemController {

    constructor($state, CategoriesService) {
        "ngInject";
        this.$state = $state;
        this.categoriesService = CategoriesService;
    }

    $onInit() {

    }

    deleteCat(detail) {
        let id = detail.id;
        this.categories = this.categoriesService.getCategories();
        this.categoriesService.deleteObj(this.categories, id);
        this.categoriesService.saveCategories(this.categories);
    }
}
