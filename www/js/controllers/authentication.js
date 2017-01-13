var app = angular.module('mealtrack.controllers.authentication', []);

/*********************************************************************
 * LoginCtrl
 *********************************************************************/
app.controller('LoginCtrl', function ($scope, $state, $ionicLoading, AuthService,StorageService) {

  $scope.formData = {
    "email": "",
    "password": ""
  };

  $scope.login = function (form) {
    console.log("LoginCtrl::login");
    if (form.$valid) {
      console.log("LoginCtrl::login");
      $ionicLoading.show();
      AuthService.login($scope.formData.email, $scope.formData.password)
        .then(function () {
          $ionicLoading.hide();
          $state.go("tab.meals");
        });
    }
  };

  if(StorageService.getLastLoginState()){
    $state.go("tab.meals");
  }

 //var currentUser = Parse.User.current();
  //if(currentUser.attributes){
    //$state.go("tab.meals");
  //}

  // if(Parse.User.current()){
  //   console.log("LoginCtrl cuuser,",Parse.User.current().attributes);
  // }



});

/*********************************************************************
 * SignupCtrl
 *********************************************************************/
app.controller('SignupCtrl', function ($scope, $state, AuthService) {

  $scope.formData = {
    "name": "",
    "email": "",
    "password": ""
  };

  $scope.signup = function (form) {
    if (form.$valid) {
      console.log("SignupCtrl::signup");
      AuthService.signup($scope.formData.email,
        $scope.formData.name,
        $scope.formData.password)
        .then(function () {
          console.log("sucess!!!");
          $state.go("tab.meals")
        });
    }
  };

});
