const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
let controllers = require('../controllers');

var app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Add parent to db (Note : test pass)
app.post('/addparent', controllers.addParent);

// Parent database/gate way (Note : test pass)
app.get('/parentinfo/:parentId', controllers.parentInfo);

// Tasks based on parents id (Note : test pass)
app.get('/parentinfo/:parentId/tasks', controllers.selectAllOfTasksOfParent);


/* ---- This is for Tasks  */
// Add task to db
app.post('/task', controllers.addTask);

// Delete task to db
app.delete('/task/:id', controllers.deleteTask);

// update task
app.put('/task/:id', controllers.updateTask);

/* ----This is anything related to children data */
// Addes in a child 
app.post('/child', controllers.addChild);

// Gets children basedon passed parent id 
app.get('/parentinfo/:parentId/children', controllers.getParentChildren);

/* This is to get all tasks for child view based on parent id */
app.get('/child/:parentId/tasks', controllers.getChildrenTasks);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname,'../client/dist/index.html'));
});
const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

