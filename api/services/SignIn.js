module.exports = {
  run: function(signinAttributes){
    var defer = Promise.defer();

    User.findOne({
      email: signinAttributes.email,
      encryptedPassword: signinAttributes.password
    })
    .exec(function onResultFetched(err, user){
      if(user){
        defer.resolve(user);
      }else{
        defer.reject({ 
          signinAttributes: { email: signinAttributes.email }, 
          errors: { message: 'Invalid email or password.' } 
        });
      }
    });

    return defer.promise;

  }
}