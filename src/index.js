import angular from 'angular';

// import { CategoryService } from './app/services/category.service';
import { AppComponent } from './app/components/app.component';
import { CategoriesComponent } from './app/components/categories/categories.component';
import { CategoryListComponent } from './app/components/category-list/category-list.component';
import { CategoryItemComponent } from './app/components/category-item/category-item.component';
import { CategoryFormComponent } from './app/components/category-form/category-form.component';
import { NotesComponent } from './app/components/notes/notes.component';
import routesConfig from './routes';
import './index.scss';

import $ from 'jquery';
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js";
import _ from 'lodash';
import 'angular-ui-router';

angular
  .module('notes-app', ['ui.router'])
  // .service('CategoryService', CategoryService)
  .component('notesApp', AppComponent)
  .component('categories', CategoriesComponent)
  .component('categoryList', CategoryListComponent)
  .component('categoryItem', CategoryItemComponent)
  .component('categoryForm', CategoryFormComponent)
  .component('notes', NotesComponent)
  .config(routesConfig);
