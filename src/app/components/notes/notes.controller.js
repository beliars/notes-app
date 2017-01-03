export default class NotesController {

    constructor($scope, NotesService) {
        "ngInject";
        this.$scope = $scope;
        this.showNoteForm = false;
    }

    $onInit() {
        this.$scope.$on('updateNotesEvent', (event, data) => {
            this.showNoteForm = false;
        });
    }

    onShowNoteForm() {
        this.showNoteForm = !this.showNoteForm;
    }
}
