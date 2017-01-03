import angular from 'angular';

import { CategoriesService } from './app/services/categories.service';
import { NotesService } from './app/services/notes.service';
import { AppComponent } from './app/components/app.component';
import { CategoriesComponent } from './app/components/categories/categories.component';
import { CategoryListComponent } from './app/components/category-list/category-list.component';
import { CategoryItemComponent } from './app/components/category-item/category-item.component';
import { CategoryFormComponent } from './app/components/category-form/category-form.component';
import { NotesComponent } from './app/components/notes/notes.component';
import { NotesFormComponent } from './app/components/notes-form/notes-form.component';
import { NotesListComponent } from './app/components/notes-list/notes-list.component';
import routesConfig from './routes';
import './index.scss';

import $ from 'jquery';
import "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js";
import _ from 'lodash';
import 'angular-ui-router';

angular
  .module('notes-app', ['ui.router'])
  .service('CategoriesService', CategoriesService)
  .service('NotesService', NotesService)
  .component('notesApp', AppComponent)
  .component('categories', CategoriesComponent)
  .component('categoryList', CategoryListComponent)
  .component('categoryItem', CategoryItemComponent)
  .component('categoryForm', CategoryFormComponent)
  .component('notes', NotesComponent)
  .component('notesForm', NotesFormComponent)
  .component('notesList', NotesListComponent)
  .config(routesConfig);
