(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("trackResource",
                ["$resource",
                 trackResource]);
    function trackResource($resource) {
        return $resource("/api/transaction/:action/:id",
               { id: '@id' },
               {
                 track:{method :'POST', params:{action:"track"}},
               })
    }
}());