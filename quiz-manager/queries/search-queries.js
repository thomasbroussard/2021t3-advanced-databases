db.exams.aggregate({
    $lookup: {
        from: "questions",
        localField: "questions",
        foreignField: "_id",
        as: "questionData"
    }
});
