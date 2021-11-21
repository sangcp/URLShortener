let express = require('express');
let mongoose = require('mongoose');
let bijective = require('./bijective.js');
let Urls = require('./models');
mongoose.connect('mongodb://localhost/url-shortener');

let app = express();

app.use(express.static('public'));

app.get('/url/:longUrl', function(req, res){

    let shortUrl = '';

    Urls.findOne({url: req.params.longUrl}, function (err, doc){
        if (doc){
            res.send({'key': bijective.encode(doc._id)});
        } else {
            let newUrl = Urls({
                url: req.params.longUrl
            });

            newUrl.save(function(err) {
                if (err) console.log(err);

                res.send({'key': bijective.encode(newUrl._id)});
            });
        } 
    });
});

app.get('/:key', function(req, res){

    let id = bijective.decode(req.params.key);

    Urls.findOne({_id: id}, function (err, doc){
        if (doc) {
            res.redirect(doc.url);
        } else {
            res.redirect("/");
        }
    }); 
});

app.listen(3000, function () {
    console.log('URL Shortener Server listening on port 3000!')
});