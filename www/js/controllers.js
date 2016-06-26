angular.module('app.controllers', ['ionic','firebase'])
  
.controller('timelineCtrl', function($scope) {
    $scope.datas = 'berkay beyaz';
})

.controller('introCtrl',function($scope, $state, $ionicSlideBoxDelegate){

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
    $scope.goToLogin = function(){
      $state.go('login');
    };
})
    .controller('loginCtrl',function($scope,$state,$ionicHistory,$firebaseSimpleLogin,$ionicPopup,$http){
        $scope.headerGoBack = function() {
            $ionicHistory.goBack();
        };

        $scope.data = {};
        $scope.showAlert = function(error) {
            var alertPopup = $ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: error
            });
            return alertPopup;
        };
        $scope.successCall = {}
        $scope.signIn = function(){

            $http({
                method  : 'POST',
                url     : 'http://localhost:8000/api/auth/login',
                data    : JSON.stringify($scope.data),  // pass in data as strings
                headers : {'Access-Control-Allow-Origin':'true'}
            })
                .success(function(data) {
                    console.log(data);

                    if (!data.success) {
                        console.log('basarili degil');
                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                        console.log(data);
                    }
                });
        }

    }).controller('MainCtrl', function($scope, $state) {
        console.log('MainCtrl');

        $scope.toIntro = function(){
            $state.go('intro');
        }
}).constant('baseUrl','http://localhost:8000/api/v1/')
 