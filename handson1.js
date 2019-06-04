const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const port = 8080;
app.use(bodyParser.json())

app.post('/sayhello', function(req, res){
    var Name = req.body.Name;
        return res.send("Hello " + Name);
})

app.listen(port);