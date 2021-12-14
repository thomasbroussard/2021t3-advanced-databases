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


/*
use dblp

//1
db.publications.find({type:"Article"})

//2
db.publications.find({type:"Article"}).count()

//1-bis
let example = db.publications.aggregate(
    {$match : {type:"Article"}},
    {$project : {authors:1, type:1, year:1 }}, //only those 3 fields are in the returned result
    {$sort : {year:-1 }} //descending
).toArray()[0]

console.log(example)


//2-bis
db.publications.aggregate(
    {$match : {type:"Article"}},
    {$project : {authors:1, type:1}},
    {$count: "count"}
    );

//3
db.publications.distinct("type").length
//console.log(example)

//4
db.publications.distinct("publisher")

db.publications.aggregate(
    {$match : {publisher:"Springer"}},
    {$sort :  {year: -1, title:1}},
    {$project: {_id:0}} // disable the field id
    )

//get the different authors with distinct
db.publications.distinct("authors")

//get the different authors with aggregate
db.publications.aggregate(
    {$unwind: "authors"}
)

//group by count on type?

db.publications.aggregate(
    {$group : {
        _id: "$type",
         count :{
            $sum : 1
         }
        }
    },
    {$project : {type:"$_id", count:1, _id :0}}
    )

 */
