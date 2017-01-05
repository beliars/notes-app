import { CategoriesService } from '../../services/categories.service';
import { NotesService } from '../../services/notes.service';

export default class NotesFormController {

    constructor($state, $stateParams, CategoriesService, NotesService) {
        "ngInject";
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.categoriesService = CategoriesService;
        this.notesService = NotesService;
        this.selectedCategory = [];
        this.error = false;
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
        this.colors = this.notesService.getColors();
        this.labels = this.notesService.getLabels();
        if(this.$stateParams.id) {
            this.note = this.notesService.getNote(this.$stateParams.id);
            this.selectedColor = this.note.color;
            this.selectedLabel = this.note.label;
            _.each(this.note.categories, (item) => {
                this.selectedCategory[item.id] = item;
            });
        }
    }

    choseCategory(category) {
        if(this.selectedCategory[category.id]) {
            if(this.selectedCategory[category.id].id != category.id) {
                this.selectedCategory[category.id] = category;
                this.note.categories.push(category);
            }
            else {
                this.selectedCategory[category.id] = false;
                let position = _.findIndex(this.note.categories, {'id': category.id});
                this.note.categories.splice(position, 1);
                _.remove(this.note.categories, item => {
                    return item.id == category.id;
                });
            }
        }
        else {
            this.selectedCategory[category.id] = category;
            this.note.categories.push(category);
        }
    }

    deleteCategory(category) {
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
            this.selectedLabel = false;
            this.selectedColor = false;
            this.error = false;
            this.$state.go('notes');
        }
        else this.error = true;
    }

    delete(id) {
        this.notesService.deleteNote(id);
        this.$state.go('notes');
    }

    goBack() {
        this.$state.go('notes');
    }
}
