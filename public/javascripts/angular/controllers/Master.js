app.controller('mastercontroller', function ($scope, $rootScope, $state,passingdataservice,trackResource) {
$scope.track = {
    noawb : ""
}
$scope.costshow1 = true;
$scope.costshow2 = false; 
$scope.showtracking = false;
$scope.listtrack = [];
$scope.NoAwb = "";
$scope.lastdata = [];
var trackresource = new trackResource();

$scope.btntrackclick = function()
{
      
     
      $scope.showtracking = true;

      trackresource.noawb = $scope.track.noawb;
      trackresource.$track({},function(data)
      {
        if(data.success)
        {
            $scope.NoAwb = data.obj.NoAWB;
            $scope.lastdata = data.obj.lastdata;
            $scope.listtrack = data.obj.result;
        }
      });
}

});
