/**
 * Angular.js application controller
 *
 * @author eugene.trounev(a)gmail.com
 */

angular.module('app')
    .controller('SidebarCtrl', ['APP_META', '$route', '$scope', function(APP_META, $route, $scope){
        
        $scope.app = APP_META;
        
        
        $scope.getCurrent = function() {
            return $route.current;
        };
        $scope.getItems = function() {
            var items = [];
            angular.forEach($route.routes, function(item){
                if(item["url"]) items.push(item);
            });
            return items;
        };
        
    }]);
