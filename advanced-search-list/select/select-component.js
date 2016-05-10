angular.module('advanced-search-list')
.component('aslSelect', {
  templateUrl: 'select/select.html',
  bindings: {
    option: '=',
    update: '&',
    delete: '&'
  }
});
