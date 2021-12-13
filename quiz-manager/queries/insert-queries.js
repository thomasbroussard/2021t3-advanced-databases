//inserting questions
db.questions.insertOne(
    {
        "question": "What is python?",
        "topics": [
            "programming",
            "scripting"
        ],
        "difficulty": 1,
        "choices": [
            {
                "id": 1,
                "choice": "a snake",
                "valid": true
            },
            {
                "id": 2,
                "choice": "a programming language",
                "valid": true
            }
        ]

    })

//returns 61b70a0786f5b021ade16d73


exam = db.exams.insertOne({
    "name": "general programming language questions",
    "topics": ["programming"],
    "questions": [
        ObjectId('61b70a0786f5b021ade16d73'),
        ObjectId('61addcb1b11265ee4080840a')
    ]
})
console.log(exam)
