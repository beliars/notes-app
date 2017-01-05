import CategoryItemController from './category-item.controller';
import './category-item.component.scss';

export const CategoryItemComponent = {
    template: require('./category-item.component.html'),
    controller: CategoryItemController,
    bindings: {
        detail: '<',
        note: '<',
        onChoose: '&'
    }
};
