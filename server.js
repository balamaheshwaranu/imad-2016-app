var express = require('express');
var morgan = require('morgan');
var path = require('path');




var element = {
title : 'Bala Test',
heading : 'Template Example',
date : 'October 9 2016',
content : `Content generated by Bala 
Content generated by Bala 
Content generated by Bala Content generated by Bala 
Content generated by Bala`
};

function CreateTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content =  data.content;
    
    var htmlTemplate = `
    <html>
    <head>
        <title> ${title} </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
            <h3> ${date} </h3>
            <div class="center">
                <img src="/ui/madi.png" class="img-medium"/>
            </div>
            <hr/>
            <div class="center text-big bold">
               ${heading}
            </div>
            <script type="text/javascript" src="/ui/main.js">
            </script>
               ${content}
    </body>
</html>`;

return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/BalaTest', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'BalaTest.html'));
  res.send(CreateTemplate(element));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
