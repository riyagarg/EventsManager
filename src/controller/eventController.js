
  explora.controller("EventController",['$scope', '$location', '$http',
    '$routeParams', 'resultsFactory', 'typeFactory', 'dateFactory',function($scope, $location, $http,
    $routeParams, resultsFactory, typeFactory, dateFactory){
      $scope.products=[];
      $scope.backgroundImage="./images/assets/constant/default.jpg";
      $scope.titleMessage = "Things To Do In Bengaluru & Beyond";
      $scope.subMessage = "Events​, Activities ​& ​ Experiences";

      $scope.go = function (path ,eventid) {
        //console.log(eventid);
        $location.path( path + "/"+eventid);
      };

      if($routeParams.type_id && !$routeParams.date_id){

         $scope.backgroundImage=cover_images[$routeParams.type_id];
         $scope.titleMessage = title_message[$routeParams.type_id];
         $scope.subMessage = sub_message[$routeParams.type_id];
      

         typeFactory.all($routeParams.type_id).then(
          function(res){
            $scope.products = res;
           
            console.log("updated");
          },
          function(err){
            console.error(err);
          });
       }
       else if($routeParams.date_id && !$routeParams.type_id){
        
       $scope.backgroundImage=cover_images[$routeParams.date_id];
         $scope.titleMessage = title_message[$routeParams.date_id];
         $scope.subMessage = sub_message[$routeParams.date_id];
        dateFactory.all($routeParams.date_id).then(
          function(res){
            $scope.products = res;

            console.log("updated");
          },
          function(err){
            console.error(err);
          });
       }
       else{
        
        resultsFactory.all().then(
        function(res){
          $scope.products = res;
          console.log("updated");
        },
        function(err){
          console.error(err);
        });
       }

      $scope.typeclick= function(path,$event){  
         $location.path( path + "/"+$event.target.id);
       };

      $scope.dateclick= function(path,$event){
        $location.path( path + "/"+$event.target.id);
       };

      $scope.allClick= function(path){
        console.log("Hii");
        $location.path(path+"/");
      };
  }]); 