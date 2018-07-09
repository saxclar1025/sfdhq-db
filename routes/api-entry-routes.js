module.exports = (app,db)=>{
  app.get("/api/entries", (req,res)=>{
    db.Entry.find(req.body.where)
    .then(entries=>{
      res.json(entries);
    });
  });

  app.post("/api/entries", (req,res)=>{
    db.Entry.create(req.body, (err,entry)=>{
      if(err) {
        return res.json(err);
      }
      res.json(entry);
    });
  });

  app.post("/api/entries/:id", (req,res)=>{
    db.Entry.findByIdAndUpdate(req.params.id, req.body.update);
  });

  app.post("/api/entries/delete", (req,res)=>{
    db.Entry.findByIdAndDelete(req.params.id);
  });
}