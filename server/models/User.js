const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

userSchema.pre('save', function (next) {
  const user = this;
  const SALT_FACTOR = 10;

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) { return next(err); }

    return bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) { return next(error); }

      user.password = hash;
      return next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    return callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
