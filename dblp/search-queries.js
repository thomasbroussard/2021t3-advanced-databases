var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27217/dblp';

MongoClient.connect(url, function(err, dbClient) {

    var db = dbClient.db("dblp")

    db.collection("publications")
        .findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
    });


    db.collection("publications")
        .distinct("type", function(err, result) {
            if (err) throw err;
            console.log(result);
        });
});

