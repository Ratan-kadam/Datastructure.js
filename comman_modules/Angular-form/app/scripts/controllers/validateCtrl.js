angular.module('clientApp')
  .controller('validateCtrl', ['$scope', '$http', 'myService', function($scope, $http, myService) {

    /* getting the mapping list  */
    $http.get("/countries.json").then(function(response) {
      $scope.countries = response.data;
    });

    $http.get("/industry.json").then(function(response) {
      $scope.industry = response.data.industry;
      console.log($scope.industry);
    });




    var validateModule = (function() {
      var EmailRegex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
      var PasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
      var phoneNumberRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);

      var emailValidation = function(email) {
        if (!EmailRegex.test(email)) {
          alert("Enter a valid Email address");
          var email = document.getElementsByClassName("workEmail");
          email[0].value = "";
          return false
        } else {
          return true;
        }

        /* email validation ends */

      };

      var passwordValidation = function(password) {
        if (!PasswordRegex.test(password)) {
          alert("Password Criteria not matched ! Please enter again");
          var email = document.getElementsByClassName("password");
          email[0].value = "";
          email = document.getElementsByClassName("repassword");
          email[0].value = "";
          return false;
        }

        /* password validation ends */
        return true;
      };

      var PhoneNumberValidation = function(phone) {
        if (!phoneNumberRegex.test(phone)) {
          alert("Enter valid phone number");
          var PhoneNumber = document.getElementsByClassName("phone");
          PhoneNumber[0].value = "";
          return false;
        }

        /* phone validation ends */
        return true;
      };


      return {
        emailValidation: emailValidation,
        passwordValidation: passwordValidation,
        PhoneNumberValidation: PhoneNumberValidation
      }

    })();


    $scope.validateMe = function() {
      var myemail = document.getElementsByClassName("workEmail");
      myemail = myemail[0].value;
      var mypassword = document.getElementsByClassName("password");
      mypassword = mypassword[0].value;
      var repassword = document.getElementsByClassName("repassword");
      repassword = repassword[0].value;
      var PhoneNumber = document.getElementsByClassName("phone");
      PhoneNumber = PhoneNumber[0].value;


      var emailResult = validateModule.emailValidation(myemail);
      if (!emailResult) {
        alert("Please enter valid email");
        return false;
      }

      if (!validateModule.PhoneNumberValidation(PhoneNumber)) {
        alert("wrong phone number please enter again ");
        return false;
      }

      if (mypassword !== repassword) {
        alert(" both password won't match");
        return false;
      }

      var PasswordResult = validateModule.passwordValidation(mypassword);

      if (!PasswordResult) {
        alert("wrong password, please enter again");
        return false;
      }

      alert("Every thing is good !! ")
      return true;
    };

  }]);
