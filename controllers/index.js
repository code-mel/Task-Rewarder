const db = require('../database/index.js');

// This will ADD a Parent (Notes : passed connection/post test)
exports.addParent = (req, res) => {
    //console.log("Parent was added", req.body);
    let parent = Object.values(req.body);
    db.query('INSERT INTO parent (name,userName, password) VALUES (?,?,?);',parent, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.send(result);
		}
	})
};
exports.addChild = (req, res) => {
	//console.log("Parent was added", req.body);
	let parent = Object.values(req.body);
	db.query('INSERT INTO child (name,userName, password,parent_id) VALUES (?,?,?,?);',parent, (err,result) => {
	if(err) {
		res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
	} else {
		let childId = result.insertId.toString();
		res.send(childId);
	}
})
};

// Get parent basicInfo based on id (Notes : passed connection/get test)
exports.parentInfo = (req, res) => {
    //console.log("selectAllOfTasksOfParent - has been triggered", req.params);
    db.query('SELECT * FROM parent WHERE id = ?',[req.params.parentId], (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.status(200).send(result);
		}
	})
};
// Will grab all tasked based on parent id
exports.selectAllOfTasksOfParent = (req, res) => {
    //console.log("selectAllOfTasksOfParent - has been triggered", req.params.parentId);

    db.query('SELECT * FROM task WHERE parent_id = ?',[req.params.parentId], (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.status(200).send(result);
		}
	})
};
// This will ADD created taskes
exports.addTask = (req, res) => {
    //console.log("Tasked was added", req.body);
    let task = Object.values(req.body);

    db.query('INSERT INTO task (title,value, aproved, parent_id) VALUES (?,?,?,?);',task, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			let id = result.insertId.toString(); // this will help send the recent record id back
			res.status(201).send(id);
		}
	})
};
// Delete task
exports.deleteTask = (req, res) => {
	//console.log("Tasked was added", req.body);
	let taskId = req.params.id
	db.query('DELETE FROM task WHERE id = ?',[taskId], (err,result) => {
	if(err) {
		res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
	} else {
		res.status(200).send(result);
	}
})
};

// This will UPDATE task
exports.updateTask = (req, res) => {
	const {id, title, value, aproved,status, parent_id, child_id} = req.body;		
	db.query(`UPDATE task SET title="${title}", value=${value}, aproved=${aproved}, status=${status}, parent_id=${parent_id}, child_id=${child_id} WHERE id=${id}`, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.status(200).send(result);
		}
	})
};

// Will grab all children based on parent id
exports.getParentChildren = (req, res) => {
	db.query('SELECT * FROM child WHERE parent_id = ?',[req.params.parentId], (err,result) => {
	if(err) {
		res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
	} else {
		res.status(200).send(result);
	}
})
};

// Will grab all tasks for child based on parent id
exports.getChildInfo  = (req, res) => {
	//console.log("selectAllOfTasksOfParent - has been triggered", req.params);
	db.query('SELECT * FROM child WHERE id = ?',[req.params.childId], (err,result) => {
	if(err) {
		res.status(505).send(err); 
	} else {
		res.status(200).send(result);
	}
})
};
// Will grab all tasks for child based on parent id
exports.getChildrenTasks = (req, res) => {
	db.query('SELECT * FROM task WHERE parent_id = ?',[req.params.parentId], (err,result) => {
	if(err) {
		res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
	} else {
		res.status(200).send(result);
	}
})
};

// update child wallet value
exports.updateWallet = (req, res) => {
	console.log(req.body);	
	const {id, value} = req.body;	
	console.log(req.body, id, value);	
	db.query(`UPDATE child SET wallet= wallet + ${value} WHERE id=${id}`, (err,result) => {
		if(err) {
			res.status(505).send(err); // .send is important because it stops the connection and inform the client what is happening
		} else {
			res.status(200).send(result);
		}
	})
};
