const courseContoller = require("../controllers/course.controller");


async function routes(app, opts={}) {
    app.route({
        method: 'GET',
        url: '/courses',
        handler: courseContoller.getCourses
    });
    app.route({
        method: 'GET',
        url: '/courses/:id',
        handler: courseContoller.getCourse
    });
    app.route({
        method: 'POST',
        url: '/courses',
        handler: courseContoller.addCourse
    });
    app.route({
        method: 'PUT',
        url: '/courses/:id',
        handler: courseContoller.editCourse
    });
    app.route({
        method: 'DELETE',
        url: '/courses/:id',
        handler: courseContoller.deleteCourse
    });
}

module.exports= routes;