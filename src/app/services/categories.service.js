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

        this.newCategory = {
            id: null,
            name: '',
            children: []
        }

        this.chosenId = 0;


        // localStorage.setItem('notesAppCategories', JSON.stringify(this.mockCategories));

    }

    getCategories() {
        this.categories = JSON.parse(localStorage.getItem('notesAppCategories'));
        if (this.categories == null) {
            return this.categories = [];
        }
        else return this.categories;
    }

    saveCategories(categories) {
        localStorage.setItem('notesAppCategories', JSON.stringify(categories));
        this.$rootScope.$broadcast('updateCategoriesEvent', this.categories);
    }

    addObj(arr, obj, id) {
        arr.forEach(item => {
            if(item.id == id) {
                item.children.push(obj);
            }
            else if(item.children.length > 0) {
                this.addObj(item.children, obj, id);
            }
        });
    }

    deleteObj(arr, id) {
        arr.forEach((item, i) => {
            if(item.id == id) {
                arr.splice(i, 1)
            }
            else if(item.children.length > 0) {
                this.deleteObj(item.children, id);
            }
        });
    }

    getMaxId(arr, max) {
        arr.forEach(item => {
            max.push(item.id);
            if(item.children.length > 0) {
                this.getMaxId(item.children, max);
            }
        });
        let maxId = _.max(max);
        if(isNaN(maxId)) maxId = 0;
        return maxId;
    }

    addNewCategoryToRoot() {
        this.getCategories();
        this.newCategory.id = this.getMaxId(this.categories, []) + 1;
        this.categories.push(this.newCategory);
        this.saveCategories(this.categories);
        this.newCategory = {
            id: null,
            name: '',
            children: []
        }
    }

    addNewCategory() {
        this.getCategories();
        this.newCategory.id = this.getMaxId(this.categories, []) + 1;
        this.addObj(this.categories, this.newCategory, this.chosenId);
        this.saveCategories(this.categories);
        this.newCategory = {
            id: null,
            name: '',
            children: []
        }
    }

}
