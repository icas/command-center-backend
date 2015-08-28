module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    encryptedPassword: {
      type: 'string',
      required: true
    }
  },
  beforeValidate: function(values, cb){
    values.encryptedPassword = values.password; // Encrypt password someway
    delete values.password;
    cb();
  }
}