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
                    },
                    {
                        "id": 4,
                        "name": "SubCat 1.3",
                        "children": []
                    },
                    {
                        "id": 5,
                        "name": "SubCat 1.4",
                        "children": [
                            {
                                "id": 6,
                                "name": "SubCat 1.4.1",
                                "children": []
                            },
                            {
                                "id": 7,
                                "name": "SubCat 1.4.2",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": 8,
                "name": "Cat 2",
                "children": [
                    {
                        "id": 9,
                        "name": "SubCat 2.1",
                        "children": []
                    },
                    {
                        "id": 10,
                        "name": "SubCat 2.2",
                        "children": []
                    },
                    {
                        "id": 11,
                        "name": "SubCat 2.3",
                        "children": []
                    },
                    {
                        "id": 12,
                        "name": "SubCat 2.4",
                        "children": [
                            {
                                "id": 13,
                                "name": "SubCat 2.4.1",
                                "children": []
                            },
                            {
                                "id": 14,
                                "name": "SubCat 2.4.2",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ];

        // localStorage.setItem('notesAppCategories', JSON.stringify(this.mockCategories));

    }

    getCategories() {
        return this.categories = JSON.parse(localStorage.getItem('notesAppCategories'));
    }

    saveCategories(categories) {
        localStorage.setItem('notesAppCategories', JSON.stringify(categories));
        this.$rootScope.$broadcast('updateCategoriesEvent', this.categories);
    }

}
