const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const port = 3000;
app.use(bodyParser.urlencoded({extended : true}))

app.post('/mydata', function(req, res){
    var Name = req.body.name;
    var age = req.body.age;
    var dept = req.body.dept;
        return res.json({"Name ": Name,  "Age": age, "Dept": dept});
});

app.listen(port);