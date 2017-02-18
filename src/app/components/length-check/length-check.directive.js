function lengthCheck() {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile($element) {
      $element.addClass('dynamic-input');
      return ($scope, $el, $attrs, $ctrl) => {
        const dynamicClass = 'dynamic-input--no-contents';
        $scope.$watch(
          () => $ctrl.$viewValue,
          (newValue) => {
            if (newValue) {
              $el.removeClass(dynamicClass);
            } else {
              $el.addClass(dynamicClass);
            }
          });
      };
    }
  };
}

angular
  .module('components.contact')
  .directive('lengthCheck', lengthCheck);
