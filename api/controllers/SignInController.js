module.exports = {
  create: function(req, res){
    SignIn.run(req.body)
      .then(function onSuccess(user){
        res.sendOK(user);
      })
      .catch(function onFail(err){
        res.badRequest(err);
      });
  }
}