var express = require('express');
var router = express.Router();

const sessionChecker = (req, res, next)=>{
  if(req.session.user){
    next()
  }else{
    res.redirect("/?msg=raf")
  }
}

router.use(sessionChecker)

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req.session.user)
  res.send('respond with a resource');
});

module.exports = router;
