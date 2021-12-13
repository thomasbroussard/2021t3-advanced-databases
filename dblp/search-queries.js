let example = db.publications.aggregate(
    {$match : {type:"Article"}},
    {$project : {authors:1}}
).toArray()

console.log(example)
