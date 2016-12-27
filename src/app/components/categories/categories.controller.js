export default class CategiriesController {

    constructor($state) {
        "ngInject";
        this.$state = $state;
        this.categories = [
            {
                "id": 1,
                "name": "Cat 1",
                "children": [
                    {
                        "id": 2,
                        "name": "SubCat 1",
                        "children": []
                    },
                    {
                        "id": 3,
                        "name": "SubCat 2",
                        "children": []
                    },
                    {
                        "id": 4,
                        "name": "SubCat 3",
                        "children": []
                    },
                    {
                        "id": 5,
                        "name": "SubCat 4",
                        "children": [
                            {
                                "id": 6,
                                "name": "SubCat 1",
                                "children": []
                            },
                            {
                                "id": 7,
                                "name": "SubCat 2",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }

    $onInit() {

    }
}
