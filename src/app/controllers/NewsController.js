const Course = require("../model/Course");

class NewsController {
    index(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR' });
            });
    }
}
module.exports = new NewsController();
