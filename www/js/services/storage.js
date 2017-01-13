var app = angular.module('mealtrack.services.storage', []);
// Store persistent data in
app.service ("StorageService", function ($localStorage) {

  $localStorage = $localStorage.$default({
    username : "",
    password : "",
    lastLoginSuccess: false
  });

  var _storeUsername= function (username) {
    $localStorage.username = username;
  };

  var _storePassword= function (password) {
    $localStorage.password = password;
  };

  var _storeLastlogin= function (state) {
    $localStorage.lastLoginSuccess = state;
  };

  var _getUsername = function () {
    return $localStorage.username;
  };

  var _getPassword= function () {
    return $localStorage.password;
  };

  var _getLastLogin= function () {
    return $localStorage.lastLoginSuccess;
  };

  var _clear = function () {
    $localStorage.$reset();
  };

  return {
    storeUsername: _storeUsername,
    storePassword: _storePassword,
    getUsername: _getUsername,
    getPassword: _getPassword,
    storeLastLoginState: _storeLastlogin,
    getLastLoginState: _getLastLogin,
    clear: _clear
  };

});
