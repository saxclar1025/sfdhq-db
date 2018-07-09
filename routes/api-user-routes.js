module.exports = (app, db) => {
  app.get("/api/users", (req, res)=>{
    var condition = {};
    db.User.find(req.body.where)
    .then(users=>{
      console.log(users);
      res.json(users);
    });
  });

  //expects and object:
  //{
  //  username: String,
  //  password: String,
  //  [firstName]: String,
  //  [lastName]: String,
  //  email: String,
  //  [phone]: String,
  //  hourlyRate: Number,
  //  [isAdmin]: Boolean (false),
  //  [isCaptain]: Boolean (false),
  //  [isInstructor]: Boolean (false),
  //  [captainRate]: Number,
  //  [crewRate]: Number,
  //  [isPayroll]: Boolean (false)
  //}
  app.post("/api/users", (req,res)=>{
    db.User.create(req.body, (err, user)=>{
      if(err) {
        console.log(err);
        return res.json(err);
      }
      res.json(user);
    });
  });

  app.post("/api/users/:id", (req,res)=>{
    db.User.findByIdAndUpdate(req.params.id, req.body.update);
  });

  app.post("/api/users/delete/:id", (req,res)=>{
    db.User.findByIdAndDelete(req.params.id)
  });
}