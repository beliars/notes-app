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
        this.colors = ['#2196F3', '#009688', '#CDDC39', '#607D8B'];
    }

    getNotes() {
        this.notes = JSON.parse(localStorage.getItem('notesAppNotes'));
        if (this.notes == null) {
            return this.notes = [];
        }
        else return this.notes;
    }

    addNewNote(note) {
        this.getNotes();
        this.newNote.id = this.getMaxId(this.notes) + 1;
        this.newNote.name = note.name;
        this.newNote.text = note.text;
        this.newNote.color = note.color;
        this.newNote.label = note.label;
        this.newNote.categories = note.categories;
        this.notes.push(this.newNote);
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
        console.log(arr.length);
        if (arr.length) return _.maxBy(arr, 'id').id;
        else return 0;
    }

    saveNotes(notes) {
        localStorage.setItem('notesAppNotes', JSON.stringify(notes));
        this.$rootScope.$broadcast('updateNotesEvent', this.notes);
    }

}
