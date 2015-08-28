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
      return defer.reject({});
    }else{
      
      var userParams = { email: signupParams.email, password: signupParams.password };

      User.create(userParams).exec(function(err, data){
        if(err){
          defer.reject({});
        }else{
          defer.resolve(data);
        }
      });
    }

    return defer.promise;
  }
};