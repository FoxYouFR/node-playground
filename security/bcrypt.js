const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$YkNriuT0ju/JBwS8pNIJP.Da8MEszU7f.OZ.GhfzrNCdiMaJpxh9.';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
