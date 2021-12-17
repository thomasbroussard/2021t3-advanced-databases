const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27417/samples';


MongoClient.connect(url, function(err, dbClient) {

    let db = dbClient.db("samples")
    let companies = db.collection("companies");

    companies.countDocuments((err, n)=> console.log(n) );

});
