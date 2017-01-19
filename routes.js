
/*
* METHOD: Index
*/
exports.index = function(req, res){
  res.json({
    message : "Ready"
  })
}

/*
* METHOD: configs
*/
exports.configs = function(req, res){
  console.log(req.body);
  res.json({message: "done"})
}
