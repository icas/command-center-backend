module.exports = {
  create: function(req, resp){
    SignUp.run(req.params)
      .then(function(data){
        resp.send("Yey");
      })
      .catch(function(err){
        resp.send("Oops");
      });
  }
}