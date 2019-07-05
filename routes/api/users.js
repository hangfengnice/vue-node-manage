// @login & register
const express = require("express");
const router = express.Router();
const User = require("../../models/Users");
const bcrypt = require("bcrypt");
var gravatar = require("gravatar");
var jwt = require("jsonwebtoken");
const passport = require("passport");

// router.get('/test',(req, res) => {
//   res.json({
//     msg: "login is works"
//   })
// })
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json("邮箱已被注册");
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        identity: req.body.identity
      });
      console.log(req.body.password);
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          // Store hash in your password DB.
          if (err) throw err;
          console.log(hash);
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json("邮箱不存在");
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        };
        jwt.sign(rule, "secret", { expiresIn: 3600 }, (err, token) => {
          if (err) {
            throw err;
          }
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        return res.status(404).json("密码错误");
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      identity: req.user.identity
    });
  }
);
module.exports = router;
