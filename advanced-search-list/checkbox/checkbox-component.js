angular.module('advanced-search-list')
.component('aslCheckbox', {
  templateUrl: 'checkbox/checkbox.html',
  bindings: {
    option: '=',
    update: '&',
    delete: '&'
  }
});
