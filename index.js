const express = require("express");
const app = express();

const isOldEnoughMiddleware = (req, res, next) => {
    const userAge = req.query.age;

    if(userAge >= 14){
        next();
    } else {
        res.status(411).json({"Error":"Your age is below minimum age criteria"});
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res){
    res.json({"msg":"You have successfully ridden the ride 1"});
});

app.get("/ride2", function(req, res){
    res.json({"msg":"You have successfully ridden the ride 2"});
});

app.listen(5000);