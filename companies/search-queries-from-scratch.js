const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27417/samples';


MongoClient.connect(url, function(err, dbClient) {

    let db = dbClient.db("samples")
    let companies = db.collection("companies");

    // companies.countDocuments((err, n)=> console.log(n) );
    // companies.findOne({}, (err, res) => {
    //     console.log(res);
    // })

    // js-01
    // companies.findOne({'name': 'Facebook'}, (cmdErr, result) => {
    //     console.log(result.name);
    // });

    // js-02
    agg = [
        {
            '$match': {
                'founded_year.$numberInt': '2005'
            }
        },
        {
            '$project': {
                name:1,
                'founded_year':1
            }

        },{
            '$limit': 3
        }
    ];
    let promise = companies.aggregate(agg).toArray();
    promise.then((value => {
        console.log(value);
    }))

});
