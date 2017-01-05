import { NotesService } from '../../services/notes.service';

export default class NotesListController {

    constructor($state, $scope, NotesService) {
        "ngInject";
        this.$state = $state;
        this.$scope = $scope;
        this.notesService = NotesService;
    }

    $onInit() {
        this.notes = this.notesService.getNotes();
        this.$scope.$on('updateNotesEvent', (event, data) => {
            this.notes = data;
        });
        console.log(this.notes);
    }

    editNote(note) {
        this.$state.go('edit', {id: note.id});
    }
}
