const clientDB = require("../db/db.config")();

const getCourses = async (req, res) => {
    const courses = await clientDB.query("SELECT * FROM course_management.courses");
    res.header("Content-Type", "application/json;charset=utf-8").send({
        data: courses
    })
};


const getCourse = async (req, res) => {
    const course = await clientDB.query(`SELECT * FROM course_management.courses WHERE id="${req.params.id}"`);
    res.header("Content-Type", "application/json;charset=utf-8").send({
        course
    })
};

const addCourse = async (req, res) => {
    try {
        const newCourse = await clientDB.insert(
        {
            table: "courses",
            records: [
                {
                    name: req.body.name,
                    description: req.body.description,
                    author: req.body.author,
                    link: req.body.link
                }
            ]
        }
        );
        res.header("Content-Type", "application/json;charset=utf-8").send({
            newCourse
        });
    } catch (err) {
        res.header("Content-Type", "application/json;charset=utf-8").send({
            error:err
        });
    }
};

const editCourse = async (req, res) => {
    try {
        const editedCourse = await clientDB.update(
        {
            table: "courses",
            records: [
                {
                    id: req.params.id,
                    name: req.body.name,
                    description: req.body.description,
                    author: req.body.author,
                    link: req.body.link
                }
            ]
        }
        );
        res.header("Content-Type", "application/json;charset=utf-8").send({
            editedCourse
        });
    } catch (err) {
        res.header("Content-Type", "application/json;charset=utf-8").send({
            error:err
        });
    }
};

const deleteCourse = async (req, res) => {
    const courses = await clientDB.query(`DELETE FROM course_management.courses where id="${req.params.id}"`);
    res.header("Content-Type", "application/json;charset=utf-8").send({
        courses
    })
};
module.exports = {
    getCourses,
    addCourse,
    editCourse,
    deleteCourse,
    getCourse
}