var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var shortUrl = require('./models/shortUrl');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls');

app.use(express.static(__dirname + '/public'));

app.get('/new/:urlToShorten(*)', (req,res,next)=>{
  var  urlToShorten  = req.params;
  // console.log(res.json(urlToShorten));
  var expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = expression;

  if(regex.test(urlToShorten)===true){
    var short = math.floor(Math.random()*100000).toString();

  var data = new shortUrl(
    {
      originalUrl: urlToShorten,
      shorterUrl: short
    }
  );
  data.save(err=>{
    if(err){
        return res.send('Error saving to database');
    }
  })
    return res.json(data)
  }
  var data = new shorterUrl({
    originalUrl: 'urlToShorten does not match stand format',
    shorterUrl: 'InvalidURL'
  })
    return res.json(data);
});

app.get('/:urlToForward',(req,res,next)=>{
  var shortUrl  = req.params.urlToForward;

shortUrl.findOne({'shorterUrl': shorterUrl}, (err,data)=>{
if(err) return res.send('Error reading database');
var re =  new regExp('(http|https)://','i');
if(re.test(strToCheck)){
  res.redirect(301,data.originalUrl);
}
else{
  res.redirect(301, 'http://'+ data.originalUrl);
}
});
// app.listen(process.env.PORT  || 3001, function(){
//   console.log('Working');
});
