const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]


function validteCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

    const result = validteCourse(req.body);
    //if invalid, return 400 - Bad request
    const { error, name } = result;
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    if (!name || name < 3) {
        // 400 Bad request
        res.status(400).send(`Name is required and should be minimum 3 characters`);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: name
    };

    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    //look up course
    //if not existing,return 404
    const course = courses.find(c => c.id === Number(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given ID was not found');
        return;
    }

    const result = validteCourse(req.body);
    //if invalid, return 400 - Bad request
    const { error, name } = result;
    if (error) {
        res.status(400).send(error.details[0].message);
        return
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === Number(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === Number(req.params.id));
    if (!course) {
        res.status(404).send('The course with the given ID was not found');
    }


    res.send(course);
});


//Port
const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})