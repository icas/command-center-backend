module.exports = {
  create: function(req, res){
    SignUp.run(req.body)
      .then(function onSuccess(data){
        res.sendOK(data);
      })
      .catch(function onFail(err){
        res.badRequest(err);
      });
  }
}