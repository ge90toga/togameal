var app = angular.module('mealtrack.services.authentication', []);

app.service('AuthService', function ($q,$ionicPopup,StorageService) {
	var self = {
		user: Parse.User.current(),
		login: function (email, password) {
			var d = $q.defer();
			Parse.User.logIn(email, password, {
        success: function (user) {
          console.log("Logged In");
          StorageService.storeLastLoginState(true);
          self.user = user;
          d.resolve(self.user);
        },
        error: function (user, error) {
          $ionicPopup.alert({
            title: 'Login Error',
            subTitle: error.message
          });
          StorageService.clear();
          d.reject(error);
        }
      });

			return d.promise;
		},

		signup: function (email, name, password) {
      var d = $q.defer();

      var user = new Parse.User();
      user.set('username', email);
      user.set('name',name);
      user.set('password',password);
      user.set('email',email);

      user.signUp(null,{
        success: function (user) {
          console.log("Account Created");
          self.user = user;
          d.resolve(self.user);
        },
        error: function (user, error) {
          $ionicPopup.alert({
            title:'Signup Error',
            subTitle: error.message
          });
          d.reject(error);
        }
      });

			return d.promise;
		},

		'update': function (data)  {
			var d = $q.defer();

      var user = self.user;
      user.set("username", data.email);
      user.set("name", data.name);
      user.set("email", data.email);

      user.save(null, {
        success: function (user) {
          self.user = user;
          d.resolve(self.user);
        },
        error: function (user, error) {
          $ionicPopup.alert({
            title: "Save Error",
            subTitle: error.message
          });
          d.reject(error);
        }
      });

			return d.promise;
		},

    'getUserInfo': function () {
      var d = $q.defer();
      d.resolve(self.user);
      return d.promise;
    },

    'logout': function () {
      Parse.User.logOut();
      StorageService.clear();
    }

	};

	return self;
})
;

