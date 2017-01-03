import { CategoriesService } from '../../services/categories.service';
import { NotesService } from '../../services/notes.service';

export default class NotesFormController {

    constructor(CategoriesService, NotesService) {
        "ngInject";
        this.categoriesService = CategoriesService;
        this.notesService = NotesService;
        this.availableCats = [];
        this.error = false;
        this.labels = ['high', 'medium', 'low'];

        this.note = {
            id: null,
            name: '',
            text: '',
            color: '',
            label: '',
            categories: []
        }
    }

    $onInit() {
        this.categories = this.categoriesService.getCategories();
        this.getCategoriesList(this.categories);
        this.colors = this.notesService.colors;
        console.log(this.colors);
    }

    getCategoriesList(array) {
        array.forEach(item => {
            this.availableCats.push({id: item.id, name: item.name});
            if(item.children.length > 0) this.getCategoriesList(item.children);
        });
    }

    chooseCategory(category) {
        this.note.categories.push(category);
        _.remove(this.availableCats, item => {
            return item.id == category.id;
        });
    }

    deleteCategory(category) {
        this.availableCats.push(category);
        _.remove(this.note.categories, item => {
            return item.id == category.id;
        });
    }

    onSelectColor(color) {
        this.selectedColor = color;
        this.note.color = color;
    }

    onSelectLabel(label) {
        this.selectedLabel = label;
        this.note.label = label;
    }

    onSubmit(form) {
        if(form.$valid && this.note.label && this.note.categories.length) {

            if(!this.note.color) {
                this.note.color = '#fff';
            }

            this.notesService.addNewNote(this.note);
            this.note = {
                id: null,
                name: '',
                color: '',
                label: '',
                categories: []
            }
            this.availableCats = [];
            this.getCategoriesList(this.categories);
            this.selectedLabel = false;
            this.selectedColor = false;
            this.error = false;
        }
        else this.error = true;
    }

}
