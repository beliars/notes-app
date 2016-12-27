import CategoryListController from './category-list.controller';
import './category-list.component.scss';

export const CategoryListComponent = {
    template: require('./category-list.component.html'),
    controller: CategoryListController,
    bindings: {
        category: '<',
    }
};
