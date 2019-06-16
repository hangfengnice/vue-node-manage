// @login & register
const express = require('express')
const router = express.Router()
const User = require('../../models/Users')

var gravatar = require('gravatar');




// router.get('/test',(req, res) => {
//   res.json({
//     msg: "login is works"
//   })
// })
router.post('/register',(req,res) => {
  // console.log(req.body)
  User.findOne({email: req.body.email})
  .then(user => {
    if(user){
      return res.status(400).json('邮箱已被注册')
    }else{
      var avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        identity: req.body.identity
      })
      newUser.save().then(user => res.json(user)).catch(err => res.status(404).json(err))
    }
  })

})

router.post('/login',(req, res) => {
  const email = req.body.email
  const password = req.body.password;
  User.findOne({email})
  .then(user => {
    if(!user){
      return res.status(404).json( "邮箱不存在")
    }
    if(password == user.password){
      res.json({
        success: true
      })
    } 
  })
})

router.get('/current',(req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    identity: req.user.identity
  })
})
module.exports = router