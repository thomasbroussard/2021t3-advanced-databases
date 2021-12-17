const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27417/samples';


MongoClient.connect(url, function(err, dbClient) {

    // choose db and collection
    let db = dbClient.db("samples")
    let companies = db.collection("companies");

    //loading the file from the filesystem
    //how to load the content from the file?
    const documents = require('./companies.json')
    // let documents = JSON.parse("text-coming-from-the-file");

    //insert in the collection
    for (let doc of documents){
        companies.insertOne(doc);
    }
    //this will not work because it is too large for a single insert
    //companies.insertMany(documents);

    companies.findOne({}, function (err, doc){
       console.log(doc);
    });



});

