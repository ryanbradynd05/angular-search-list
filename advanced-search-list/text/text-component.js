angular.module('advanced-search-list')
.component('aslText', {
  templateUrl: 'text/text.html',
  bindings: {
    option: '=',
    update: '&',
    delete: '&'
  }
});
