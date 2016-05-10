angular.module('advanced-search-list')
.component('aslDate', {
  templateUrl: 'date/date.html',
  bindings: {
    option: '=',
    update: '&',
    delete: '&'
  },
  controller: ['$scope',
    function($scope) {
      'use strict';
      
      var $ctrl = this;
      $ctrl.opened = false;
      
      $ctrl.dateOptions = {
        showWeeks: false
      };
      $ctrl.modelOptions = {
        timezone: 'GMT'
      };
      $ctrl.dateFormat = 'yyyy-MM-dd';  
      
      $ctrl.open = function() {
        $ctrl.opened = !$ctrl.opened;
      };
      
      $scope.$watch('$ctrl.date', function(newVal) {
        $ctrl.option.value = moment(date).format($ctrl.dateFormat);
      });
    }
});
