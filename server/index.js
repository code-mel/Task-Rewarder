const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
let controllers = require('../controllers');

var app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/parent/:id',express.static(path.resolve(__dirname, '../client/dist')));

// Add parent to db (Note : test pass)
app.post('/addparent', controllers.addParent);

// Parent database/gate way (Note : test pass)
app.get('/parentinfo/:parentId', controllers.parentInfo);

// Tasks based on parents id (Note : test pass)
app.get('/parentinfo/:parentId/tasks', controllers.selectAllOfTasksOfParent);

// Tasks based on parents id (Note : test pass)
app.post('/child', controllers.addChild);


/* ---- This is for Tasks  */
// Add task to db
app.post('/task', controllers.addTask);

// Delete task to db
app.delete('/task/:id', controllers.deleteTask);

// update task
app.put('/task/:id', controllers.updateTask);

const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

