export class CategoriesService {
    constructor($rootScope) {
        'ngInject;'
        this.$rootScope = $rootScope;

        this.mockCategories = [
            {
                "id": 1,
                "name": "Cat 1",
                "children": [
                    {
                        "id": 2,
                        "name": "SubCat 1.1",
                        "children": []
                    },
                    {
                        "id": 3,
                        "name": "SubCat 1.2",
                        "children": []
                    }
                ]
            },
            {
                "id": 4,
                "name": "Cat 2",
                "children": [
                    {
                        "id": 5,
                        "name": "SubCat 2.1",
                        "children": []
                    }
                ]
            }
        ];


        localStorage.setItem('notesAppCategories', JSON.stringify(this.mockCategories));

    }

    getCategories() {
        return this.categories = JSON.parse(localStorage.getItem('notesAppCategories'));
    }

    saveCategories(categories) {
        localStorage.setItem('notesAppCategories', JSON.stringify(categories));
        this.$rootScope.$broadcast('updateCategoriesEvent', this.categories);
    }

}
