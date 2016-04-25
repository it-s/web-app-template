/**
 * Angular.js application controller
 *
 * @author eugene.trounev(a)gmail.com
 */

angular.module('app')
    .controller('ProfileCtrl', ['$scope', '$route', function($scope, $route){
        
        $scope.page = $route.current;
        
    }]);
