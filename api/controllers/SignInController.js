module.exports = {
  create: function(req, res){
    SignIn.run(req.body)
      .then(function(user){
        res.sendOK(user);
      })
      .catch(function(err){
        res.badRequest(err);
      });
  }
}