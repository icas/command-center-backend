module.exports = {
  create: function(req, res){
    SignUp.run(req.body)
      .then(function(data){
        res.sendOK(data);
      })
      .catch(function(err){
        res.badRequest(err);
      });
  }
}