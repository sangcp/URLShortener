const express = require('express');
const mongoose = require('mongoose');
const bijective = require('./bijective');
const Urls = require('./models');

const URL = 'mongodb://localhost/url-shortener';
mongoose.connect(URL);

const app = express();

app.use(express.static('public'));

app.get('/url/:longUrl', (req, res)=> {
    Urls.findOne({url: req.params.longUrl}, (err, doc) => {
        if (doc){
            res.send({'key': bijective.encode(doc._id)});
        } else {
            const newUrl = Urls({
                url: req.params.longUrl
            });
            newUrl.save((err) => {
                if (err) console.log(err);
                res.send({'key': bijective.encode(newUrl._id)});
            });
        } 
    });
});

app.get('/:key', (req, res)=> {

    const id = bijective.decode(req.params.key);

    Urls.findOne({_id: id}, (err, doc)=> {
        if (doc) {
            res.redirect(doc.url);
        } else {
            res.redirect("/");
        }
    }); 
});

app.listen(3000, () => {
    console.log('URL Shortener Server listening on port 3000!')
});