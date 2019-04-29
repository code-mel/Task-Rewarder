const db = require('../database/index.js');

// This will ADD a Parent (Notes : passed connection/post test)
exports.addParent = (req, res) => {
    console.log("Parent was added", req.body);
    let parent = Object.values(req.body);
    db.query('INSERT INTO parent (name,userName, password) VALUES (?,?,?);',parent, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.send(result);
		}
	})
};

// Get parent basicInfo based on id (Notes : passed connection/get test)
exports.parentInfo = (req, res) => {
    console.log("selectAllOfTasksOfParent - has been triggered", req.params);

    db.query('SELECT * FROM parent WHERE id = ?',[req.params.parentId], (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.send(result);
		}
	})
};
// Will grab all tasked based on parent id
exports.selectAllOfTasksOfParent = (req, res) => {
    console.log("selectAllOfTasksOfParent - has been triggered", req.params.parentId);

    db.query('SELECT * FROM task WHERE parent_id = ?',[req.params.parentId], (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.send(result);
		}
	})
};
// This will ADD created taskes
exports.addTask = (req, res) => {
    console.log("Tasked was added", req.body);
    let task = Object.values(req.body);

    db.query('INSERT INTO task (title,value, aproved, parent_id, chid_id) VALUES (?,?,?,?,?);',task, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.send(result);
		}
	})
};
