export class NotesService {

    constructor($rootScope) {
        'ngInject;'
        this.$rootScope = $rootScope;
        this.newNote = {
            id: null,
            name: '',
            color: '',
            label: '',
            categories: []
        }
        this.colors = ['#2196F3', '#009688', '#CDDC39', '#607D8B', '#fff'];
        this.labels = ['high', 'medium', 'low'];
    }

    getNotes() {
        this.notes = JSON.parse(localStorage.getItem('notesAppNotes'));
        if (this.notes == null) {
            return this.notes = [];
        }
        else return this.notes;
    }

    getColors() {
        return this.colors;
    }

    getLabels() {
        return this.labels;
    }

    addNewNote(note) {
        this.getNotes();
        this.newNote.name = note.name;
        this.newNote.text = note.text;
        this.newNote.color = note.color;
        this.newNote.label = note.label;
        this.newNote.categories = note.categories;
        if(note.id == null){
            this.newNote.id = this.getMaxId(this.notes) + 1;
            this.notes.push(this.newNote);
        }
        else {
            this.newNote.id = note.id;
            let index = _.findIndex(this.notes, {'id': note.id});
            this.notes.splice(index, 1, this.newNote);
        }
        this.saveNotes(this.notes);
        this.newNote = {
            id: null,
            name: '',
            color: '',
            label: '',
            categories: []
        }
    }

    getMaxId(arr) {
        if (arr.length) return _.maxBy(arr, 'id').id;
        else return 0;
    }

    saveNotes(notes) {
        localStorage.setItem('notesAppNotes', JSON.stringify(notes));
        this.$rootScope.$broadcast('updateNotesEvent', this.notes);
    }

    getNote(id) {
        return _.find(this.getNotes(), item => item.id == id);
    }

    deleteNote(id) {
        let index = _.findIndex(this.getNotes(), {'id': id});
        this.notes.splice(index, 1);
        this.saveNotes(this.notes);
    }
}
