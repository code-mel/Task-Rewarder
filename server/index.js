var express = require('express');
const bodyParser = require('body-parser');
var db = require('../database');
const controllers = require('../controllers')
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended : false
}));

app.use(express.static(__dirname + '/../client/dist'));

// Add parent to db (Note : test pass)
app.post('/parent', controllers.addParent);

// Parent database/gate way (Note : test pass)
app.get('/parent/:parentId', controllers.parentInfo);

// Tasks based on parents id (Note : test pass)
app.get('/parent/:parentId/tasks', controllers.selectAllOfTasksOfParent);


/* ---- This is for Tasks  */
// Add task to db
app.post('/task', controllers.addTask);

const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

