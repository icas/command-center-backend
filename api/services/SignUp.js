module.exports = {
  /**
   * Run signup use case
   * @params {object} params 
   * @param {Number} b
   * @return {Promise} promise
   */
  run: function(signupParams){
    var defer = Promise.defer();
    
    if(signupParams['password'] != signupParams['passwordConfirmation']){
      defer.reject({ 
        user: signupParams, 
        errors: { 
          invalidAttributes: { passwordConfirmation: [{ message: "doens't match" }] } 
        } 
      });
    }else{
      var userParams = { email: signupParams.email, password: signupParams.password };

      User.create(userParams).exec(function onResultFetched(err, data){
        if(err){
          defer.reject({ user: signupParams, invalidAttributes: err.invalidAttributes });
        }else{
          defer.resolve(data);
        }
      });
    }

    return defer.promise;
  }
};