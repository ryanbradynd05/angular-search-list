angular.module('angular-search-list', [
  'ui.bootstrap',
  'ui.checkbox'
])
.component('advanced-search-list', {
  templateUrl: 'search.html'
  bindings: {
    options: '<',
    presets: '<',
    searchEvent: '@'
  },
  controller: ['$log', '$scope', '$element',
    function($log, $scope, $element) {
      'use strict'
      
      var $ctrl = this;
      
      function removeOption(name, option) {
          var index = $ctrl[name + 'Options'].indexOf(option);
          $ctrl[name + 'Options'].splice(index, 1);
      }
      function removeAvailableOption(option) {
          removeOption('available', option);
      }
      function removeSelectedOption(option) {
          removeOption('selected', option);
      }
      
      function addOption(name, option) {
        $ctrl[name + 'Options'].push(option);
      }
      function addAvailableOption(option) {
        addOption('available', option);
      }
      function addSelectedOption(option) {
        addOption('selected', option);
      }
      
      function resetSearchQuery() {
        $ctrl.searchQuery = '';
      }
      
      function includes(array, element) {
        return array.indexOf(element) !== -1;
      }
      
      function findPreset(key) {
        return $ctrl.presets.find(function(element) {
          return element.key === key;
        });
      }
      
      $ctrl.clear = function() {
        $ctrl.availableOptions = angular.copy($ctrl.options);
        $ctrl.selectedOptions = [];
      };
      
      $ctrl.selectOption = function(option) {
        if (!includes($ctrl.selectedOptions, options)) {
          removeAvailableOption(option);
          addSelectedOption(option);
          resetSearchQuery();
        }
      };
      
      $ctrl.deleteOption = function(option) {
        addAvailableOption(option);
        removeSelectedOption(option);
      };
      
      $ctrl.search = function() {
        var searchOptions = $ctrl.selectedOptions.map(function(option) {
          return {
            key: option.key,
            value: option.value
          }
        });
        $scope.$emit($ctrl.searchEvent, searchOptions);
      };
      
      $ctrl.selectedOptions = [];
      $ctrl.availableOptions = $ctrl.options.map(function(option) {
        var preset = findPreset(option.key);
        if (preset) {
          option.value = preset.value;
          addSelectedOption(option);
        } else {
          return option;
        }
      }).filter(Boolean);
      $ctrl.loaded = true;
    }
  ]
});
